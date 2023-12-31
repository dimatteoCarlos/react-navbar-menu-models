import './errorPage.css';

const ErrorPage = () => {
  return (
    <section className='page_404'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 '>
            <div className='col-sm-10 col-sm-offset-1  text-center'>
              <h1 className='text-center '>404</h1>

              <div className='four_zero_four_bg'></div>

              <div className='contant_box_404'>
                <h3 className='h2'>It Looks like you're lost</h3>

                <p>the page you are looking for is not available!</p>

                <a href='/' className='link_404'>
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
