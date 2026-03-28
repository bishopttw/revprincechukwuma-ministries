import dadPhoto from "../assests/images/bluestanding.jpg";
export default function About(){
    return(
        <section id="about">
        <div className="about-text">
            <div>
                <h2>ABOUT, VEN. PRINCE CHUKWUMA(PAPA UMUBOYII)</h2>
                <p>Ven. Prince Chukwuma, popularly known as PAPA UMUBOYII, 
                He is an Archdeacon in the anglican communion 
                dedicated to teaching and preaching God's word. 
                Through his umuboyii fellowship, he provides mentorship 
                and guidance to young people especially apprentices, 
                while reaching a wider audience through church services,
                morning prayers, and a strong online presence.
                </p>

                <p>
                    His ministry is marked by vibrant morning prayers, impactful church programs, engaging in online teachings
                    and also doing business seminars both online and onsite. Ven. Prince Chukwuma has ministered at so many churches across the world.
                </p>

                <p>He also has a GLOBAL BUSINESS AND PRAYER CONFERENCE program 
                    Global Business and Prayer Conference is a powerful gathering designed to equip individuals with practical business ideas, strategies for growth, and spiritual insight through prayer.
                    It is a place where entrepreneurs, professionals, and aspiring business owners come to receive direction, clarity, and divine empowerment for their businesses.
                    The conference is held twice every year — in July and December, creating a consistent platform for learning, growth, and spiritual strengthening.
                </p>

                <div className="about-btn">
                <a href="https://youtube.com/@revprincechukwuma?si=CxVnncPj1KrQ62eC" target="_blank" rel="noreferrer">KNOW MORE</a>
                </div>
            </div>

            <div className="about-image">
                <img src={dadPhoto} alt="Ven. Prince Chukwuma"/>
            </div>
        </div>
        </section>
    );
}