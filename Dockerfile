# Utilise une image Nginx
FROM nginx:alpine

# Copie le site dans le dossier de Nginx
COPY . /usr/share/nginx/html

# Expose le port utilisé par Nginx
EXPOSE 80

# Nginx démarre automatiquement avec l'image
