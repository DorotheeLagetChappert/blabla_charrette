import React from 'react';

import banner from '../../assets/banner.jpg';
import './Home.css';


const SearchBarGlobal = () => {

    return (
        <>
            <p className="infoSanitaire">
                <i className="fas fa-exclamation-circle"></i> Peste noire et pass sanitaire : retrouvez les dernières infos sur notre FAQ.
            </p>
            <div className="blocBanner">
                <div className="blocBannerSearch">
                    <select className="choice">
                        <option disabled selected>Départ</option>
                        <option >Kaamelott</option>
                        <option >Versaille</option>
                        <option >Montmiraille</option>
                        <option >Fort Boyard</option>
                        <option >Carmelid</option>
                        <option >Edimbourg</option>
                        <option >Lancaster</option>
                        <option >Westminster</option>
                        <option >Dublin</option>
                    </select>
                    <select className="choice">
                        <option disabled selected>Destination</option>
                        <option >Kaamelott</option>
                        <option >Versaille</option>
                        <option >Montmiraille</option>
                        <option >Fort Boyard</option>
                        <option >Carmelid</option>
                        <option >Edimbourg</option>
                        <option >Lancaster</option>
                        <option >Westminster</option>
                        <option >Dublin</option>
                    </select>
                    <select className="choice">
                        <option disabled selected>Transport</option>
                        <option >À pied</option>
                        <option >À cheval</option>
                        <option >Chariotte</option>
                        <option >Calèche</option>
                        <option >Carrosse</option>
                    </select>
                    <input type="date" className="reservationDate"/>
                    <select className="choice">
                        <option disabled selected>Nombre de gueux</option>
                        <option >1 paysans</option>
                        <option >2 pequeux</option>
                        <option >3 pecords</option>
                        <option >4 bouseux</option>
                        <option >5 pignoufs</option>
                        <option >6 hérétiques</option>
                        <option >+ de 6 hérétiques</option>
                    </select>
                    <button className="logoSearch"><i className="fas fa-search"></i></button>
                </div>
                <img src={banner} alt="bannière charrette devant un château" className="banner" />
            </div>

        </>
    );
}

export default SearchBarGlobal;