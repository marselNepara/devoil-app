export default function Footer(){
  return(
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p>&copy; {new Date().getFullYear()} DevOil. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}