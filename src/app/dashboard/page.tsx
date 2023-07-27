import Image from 'next/image';

import freeGown from '../../../public/assets/images/clothes/free-gown.png';
import flaredGown from '../../../public/assets/images/clothes/flared-gown.png';
import asymmetricalGown from '../../../public/assets/images/clothes/asymmetrical-gown.png';
import corsetTop from '../../../public/assets/images/clothes/corset-top.png';
import flapTop from '../../../public/assets/images/clothes/flap-top.png';
import flaplessTop from '../../../public/assets/images/clothes/flapless-top.png';
import kneeLengthSkirt from '../../../public/assets/images/clothes/knee-length-skirt.png';
import flaredSkirt from '../../../public/assets/images/clothes/flared-skirt.png';
import sixPiecesSkirt from '../../../public/assets/images/clothes/six-pieces-skirt.png';

const HomePage = () => {
    return (
        <div>
            <h2>Premade Measurements</h2>

            <section>
                <h3>Gowns</h3>
                <ul>
                    <li>
                        <figure>
                            <Image
                                src={freeGown}
                                alt=''
                            />
                            <figcaption>Free-gown</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image
                                src={flaredGown}
                                alt=''
                            />
                            <figcaption>Flared</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image 
                                src={asymmetricalGown}
                                alt=''
                            />
                            <figcaption>Asymmetrical</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Tops</h3>
                <ul>
                    <li>
                        <figure>
                            <Image
                                src={corsetTop}
                                alt=''
                            />
                            <figcaption>Corset</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image
                                src={flapTop}
                                alt=''
                            />
                            <figcaption>Flap-top</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image 
                                src={flaplessTop}
                                alt=''
                            />
                            <figcaption>Flapless</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Skirts</h3>
                <ul>
                    <li>
                        <figure>
                            <Image 
                                src={kneeLengthSkirt}
                                alt=''
                            />
                            <figcaption>Knee-length</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image
                                src={flaredSkirt}
                                alt=''
                            />
                            <figcaption>Flared</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image
                                src={sixPiecesSkirt}
                                alt=''
                            />
                            <figcaption>6-Pieces</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default HomePage