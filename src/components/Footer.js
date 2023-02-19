import githublogo from '../img/github-mark-white.png'
import matrixlogo from '../img/matrix-logo-white.svg'


export default function Footer() {
    return(
        <div className="bg-slate-900 h-just5">
          <div className="flex justify-center items-center h-full  flex-col">
              <div className="flex gap-5 pt-2">
                  <a href="https://github.com/mxtthiasss"><img src={githublogo} alt="githublogo" className="h-5 "/> </a>
                  <a href="https://matrix.to/#/@mxtthiass:matrix.org"><img src={matrixlogo} alt="matrixlogo" className="h-5 "/> </a>
              </div>
              <p className="text-xl pt-1">© All rights reserved </p>
          </div>

        </div>
    )
}
