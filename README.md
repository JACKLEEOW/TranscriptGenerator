## How to develop

### frontend environment
```
# /root

# if yarn is not install
npm install -g yarn

# Install dependencies/packages
yarn install

# Added packages
yarn add <foo> # can change, just use the one on docs per package

# Run local server
yarn dev
```

### backend environment
```
# /root
cd backend # run these in /root/backend

# /root/backend
python -m venv venv

# Run before adding any packages!!
pip install -r requirements.txt

# Adding packages
pip install <foo>
pip freeze > requirements.txt 
# ^ this is so that installed packages are saved and installable on pull
