user=user
ip=ip

function title {
  echo
  echo "###############################################################################"
  echo "## $1"
}

title '打包代码'
pnpm run docs:build
cd .vitepress/dist
tar -cz -f ../../tmp/dist.tar.gz *
tar -zcvf dist.tar.gz *
cd ../../

title '上传代码'
scp "tmp/dist.tar.gz" $user@$ip:/home/$user/nginx/html

title '上传远程脚本'
scp "bin/setup_remote.sh" $user@$ip:/home/$user/nginx/html

title '删除代码'
rm -rf tmp/dist.tar.gz

title '执行远程脚本'
ssh $user@$ip "/bin/bash /home/$user/nginx/html/setup_remote.sh"