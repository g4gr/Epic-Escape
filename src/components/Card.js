import React from 'react';

const Card = () => (
  <div>
    <section id="header" className="jumbotron text-center">
      <h1 className="display-3">More ...</h1>
      <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </section>
    <section id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Sunset</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Sunset</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Sunset</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Card;
