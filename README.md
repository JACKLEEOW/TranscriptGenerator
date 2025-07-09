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

# Entering venv
python -m venv venv # if there is no venv
# if in bash
source <venv>/Scripts/activate
# if in powershell
<venv>\Scripts\Activate.ps1

# Exiting venv
deactivate

# Run before adding any packages!!
pip install -r requirements.txt

# Adding packages
pip install <foo>
pip freeze > requirements.txt 
# ^ this is so that installed packages are saved and installable on pull
