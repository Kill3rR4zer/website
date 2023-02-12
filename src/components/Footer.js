import githublogo from '../github-mark-white.png'

export default function Footer() {
    return(
        <div className="bg-slate-900 h-just5">
          <div className="flex justify-center items-center h-full">
            <a href="https://github.com/mxtthiasss"><img src={githublogo} alt="githublogo" className="h-5 pr-3"/> </a>
            <p className="text-xl">© All rights reserved </p>
            </div>
        </div>
    )
}
