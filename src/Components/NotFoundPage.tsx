import React from 'react';

function NotFoundPage() {
  return (
    <div className="text-center h-100 mt-5">
      <h1 className="h4 text-muted">
        Страница не найдена
      </h1>
      <p className="text-muted">
        Перейдите на
        <a href="/">Главную</a>
      </p>
    </div>
  );
}

export default NotFoundPage;
