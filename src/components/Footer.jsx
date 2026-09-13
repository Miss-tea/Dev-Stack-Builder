const LINK_GROUPS = [
    { title: "Product", links: ["Home", "Technologies", "Projects"] },
    { title: "Company", links: ["About", "Contact", "Careers"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];
export default function Footer() {      
    return (
        <footer className="border-t border-slate-200 bg-white"> 
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
                    <div>
                        <a href="#home" className="flex items-center gap-2">
                             <span className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
                                DS
                                </span>
                            <span className="text-lg font-bold text-slate-900">
                                Dev <span className="text-brand-gradient">Stack</span>
                                </span> 
                        </a>
                        <p className="mt-3 max-w-xs text-sm text-slate-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                            </p>
                        <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">    
                            <a href="#github" className="hover:text-slate-800">GitHub</a>
                            <a href="#twitter" className="hover:text-slate-800">Twitter</a>
                            <a href="#linkedin" className="hover:text-slate-800">LinkedIn</a>
                            </div>
                            </div>

                    {LINK_GROUPS.map((group) => (   
                        <div key={group.title}>
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                            {group.title}
                            </h4>  
                            <ul className="mt-3 flex flex-col gap-2">
                           {group.links.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-800">    
                                {link}
                                </a>
                                </li>
                                ))}

                            </ul>
                            </div>
                    ))}  
                    </div>   

                     <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#privacy" className="hover:text-slate-800">Privacy</a>
                            <a href="#terms" className="hover:text-slate-800">Terms</a>
                        </div>
                        </div>


                     </div>
                     </footer>

    );
}   