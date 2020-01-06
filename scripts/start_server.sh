source /home/ec2-user/.bash_profile
source /home/ec2-user/.bashrc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

cd /home/ec2-user/recipes-for-us

echo "pwd..."
echo $PWD

echo "Starting server..."
npm run start &
