FROM nginx:latest

# Xóa cache trước khi copy file mới
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ code frontend vào thư mục Nginx
COPY . /usr/share/nginx/html

# Expose cổng 80 để chạy web
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
