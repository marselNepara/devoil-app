import { useParams } from 'react-router-dom';

const categories = {
  'white-oils': {
    title: 'Белые масла',
    description: 'Высококачественные белые масла для пищевой промышленности...',
    products: [/* ... */]
  },
  'vaseline-oils': {
    title: 'Вазелиновые масла',
    description: 'Очищенные вазелиновые масла для косметики и фармацевтики...',
    products: [/* ... */]
  },
  'reducer-oils': {
    title: 'Редукторные масла',
    description: 'Специальные масла для промышленных редукторов...',
    products: [/* ... */]
  }
};

export default function OilCategoryPage() {
  const { categorySlug } = useParams(); // получаем "white-oils", "vaseline-oils" и т.д.
  const category = categories[categorySlug];

  if (!category) {
    return <div>Категория не найдена</div>; // или редирект на 404
  }

  return (
    <div>
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <div className="products">
        {category.products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
}