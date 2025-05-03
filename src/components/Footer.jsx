import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
    return (
        <footer className='footer font-poppins lg:px-0 py-12'>
            {/*<hr className='border-slate-200' />*/}

            <div className='footer-container'>
                <p className={'max-md:text-center'}>
                    © 2025 Created By <strong>Divya Chandrapandi</strong>.
                </p>

                <div className='flex gap-3 justify-center items-center'>
                    {socialLinks.map((link) => (
                        <Link key={link.name} to={link.link} target='_blank'>
                            <img
                                src={link.iconUrl}
                                alt={link.name}
                                className='w-6 h-6 object-contain'
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;