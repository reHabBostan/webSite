export const NotFound = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {' '}
            {/* <img src="img/about.jpg" className="img-responsive" alt="" />{' '} */}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Страница не найдена</h2>
              {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
              {/* <h3>Why Choose Us?</h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
