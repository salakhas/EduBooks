import { BrowseDiv } from "../BrowseDiv/BrowseDiv"
import { Navber } from "../Navbar/Navbar"
import { SlideShow } from "../SlideShow/SlideShow"

export const  Home = () => {
    return (
        <div>
            <Navber/>
            <h1>Home</h1>
            <BrowseDiv/>
            <SlideShow/>
            <footer class="iq-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 text-right">
            Copyright 2020 <a href="#">EduBooks</a> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}