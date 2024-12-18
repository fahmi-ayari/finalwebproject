function Events(){
    return(
        <section>
       
        <section className="carousel">
          <h1 className="categories__title">Upcoming Events</h1>
          <div className="carousel__container">
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://www.thepatriotbrief.com/wp-content/uploads/sites/19/shutterstock_1480095632-1.jpg.jpeg"
                alt="Hackfest"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Hackfest</h5>
                <h6 className="carousel-item__details--subtitle">CyberSecurity</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                className="carousel-item__img"
                src="https://www.searchenginejournal.com/wp-content/uploads/2023/04/the-metaverse-what-is-it-2-64412b87eaf6c-sej.png"
                alt="people"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">MTS3.0</h5>
                <h6 className="carousel-item__details--subtitle">Metaverse3.0</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://www.indabaxtunisia.com/2023/assets/images/ogthumbnail.png"
                alt="people"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Indabax</h5>
                <h6 className="carousel-item__details--subtitle">IEEE event</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://th.bing.com/th/id/OIP.zAflP_V3EMyYFyTSmUcQ_gHaHa?rs=1&pid=ImgDetMain"
                alt="people"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">wie</h5>
                <h6 className="carousel-item__details--subtitle">women in engineering...</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="./public/image1.png"
                alt="people"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">bikeFest</h5>
                <h6 className="carousel-item__details--subtitle">bikeFest</h6>
              </div>
            </div>
            </div>
             </section>
        </section>
    );
}
export default Events 