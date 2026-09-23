import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 justify-between">
                    
                    <div className="md:col-span-2">
                        <a className="flex items-center mb-4" href="#home">
                            <img className="h-8 w-auto object-contain" src={logo} alt="Dev Stack Logo" />
                        </a>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex items-center gap-6 text-sm font-semibold text-gray-700">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-950 transition-colors">
                                GitHub
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-950 transition-colors">
                                Twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-950 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#home" className="hover:text-gray-950 transition-colors">Home</a></li>
                            <li><a href="#technologies" className="hover:text-gray-950 transition-colors">Technologies</a></li>
                            <li><a href="#projects" className="hover:text-gray-950 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#about" className="hover:text-gray-950 transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-gray-950 transition-colors">Contact</a></li>
                            <li><a href="#careers" className="hover:text-gray-950 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#privacy" className="hover:text-gray-950 transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-gray-950 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <span>© 2026 Dev Stack. All rights reserved.</span>
                    <div className="flex items-center gap-5">
                        <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;