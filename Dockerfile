# Firstly Import A Base Image Like node For Running.....
FROM node:22

# Now Copy Your Codes Into The Image....
# --> To Copy Whole Code.....
COPY . .  

# COPY package-lock.json package-lock.json
# COPY package.json package.json
# COPY index.js index.js
# COPY public/ public/

# Now, Install The Node Modules For Execution.....
RUN npm install

# At Last, Run The Image.....
CMD ["node", "index.js"]
