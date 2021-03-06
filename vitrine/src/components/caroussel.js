import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sites from '../datas/datassite';

export default function Caroussel() {

    return (
        <>
            <h1 className="caroussel_title">Portefolio de mes projets web OpenClassrooms</h1>
            <div className="caroussel_container">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl="true"
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable={true}
                >
                    {sites.map(({ id, name, image, title, technos, description, link, repolink }) => (
                        <article className="site_card" id={id}>
                            <div className="logo_container">
                                <img alt="logo du projet" src={image} title={name} className="site_logo" />
                            </div>
                            <h2 className="site_title">{title}</h2>
                            <p className="site_technos">{technos}</p>
                            <div className="site_description_container">
                                <p className="site_description">{description}</p>
                            </div>
                            <div className="links_container">
                                <a className="site_link" href={link} target="_blank" rel="noreferrer">Site</a>
                                <a className="repo_link" href={repolink} target="_blank" rel="noreferrer">Repository</a>
                            </div>

                        </article>
                    ))}
                </Carousel>
            </div>
        </>
    )
}