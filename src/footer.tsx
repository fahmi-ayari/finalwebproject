function Footer(){
 return(
    
     <footer id="footer">
        <div className="f-item-con">
            <div className="app-info">
                <span className='app-name'>
                    <span className='app-initial'>SUP</span>'CLUBS
                </span>
                <p>We provides you with all information about SUPCOM's Clubs, along with <strong>Well organised</strong> and <strong>friendly</strong> Website</p>
            </div>
            <div className="useful-links">
                <div className="footer-title">Useful Links</div>
                <ul>
                    <li> <a href="https://supcom.tn/"> SUPCOM</a></li>
                    <li> <a href="https://hackfest.tn/">Hackfest</a></li>
                    <li><a href="https://deeplearningindaba.com/2024/indabax/tunisia/">Indabax</a></li>
                    <li><a href="#">About us</a></li>
                  
                </ul>
            </div>
            <div className="help-sec">
                <div className="footer-title">Help</div>
                <ul>
                    <li>Feedback</li>
                    <li>Report a Issue / Bug</li>
                </ul>
            </div>
            <div className="g-i-t">
                <div className="footer-title">Get in Touch</div>
                <form action="/" method="post" className="space-y-2">
                    <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Name' />
                    <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
                    <textarea typeof="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                        placeholder='Message...'></textarea>
                    <button type="submit" className='f-btn'>Submit</button>
                </form>
            </div>
        </div>
        <div className='cr-con'>Copyright &copy; 2024 | Made by Fahmi AYARI & Adam Njeh</div>
    </footer>
  


    
 ) ;

}
export default Footer 