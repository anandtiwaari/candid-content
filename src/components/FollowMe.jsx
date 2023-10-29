import React from "react";
import "./FolllowMe.css";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import NeilImage from "../assets/NeilAdams.png";
export const FollowMe = () => {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <section className="d-flex flex-wrap">
        <div className="box1 box" style={{ width: "92%", margin: "auto" }}>
          <div className="content">
            <div className="image">
              <img src={NeilImage} alt="Profile Image" />
            </div>
            <div className="level">
              <p>PRO</p>
            </div>
            <div className="text">
              <p className="name">Neil David Adams</p>
              <p className="job_title">Content Creation</p>
              <p className="job_discription">
                saving up cause i wanna travel the world and stuff
              </p>
            </div>
            <div className="icons">
              <button>
                <ion-icon name="logo-dribbble"></ion-icon>
              </button>
              <button>
                <a href="https://www.instagram.com/neil.adams/">
                  <ion-icon name="logo-instagram">
                    <AiFillInstagram />
                  </ion-icon>
                </a>
              </button>
              <button>
                <a href="https://www.youtube.com/channel/UCb4_5IkLailL-4LsM8ZnfZA">
                  <ion-icon name="logo-twitter">
                    <AiFillYoutube />
                  </ion-icon>
                </a>
              </button>
              <button>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.tiktok.com%2F%40neiladams%3Flang%3Den&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0jjchXa8BrdnF5BS_opEyC">
                  <ion-icon name="logo-linkedin">
                    <FaTiktok />
                  </ion-icon>
                </a>
              </button>
              <button>
                <ion-icon name="logo-facebook"></ion-icon>
              </button>
              <button>
                <ion-icon name="logo-behance"></ion-icon>
              </button>
            </div>
            <div className="button">
              <div>
                <button className="message" type="button">
                  Message
                </button>
              </div>
              <div>
                <button
                  className="connect "
                  // style={{ marginLeft: "3rem" }}
                  type="button"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="box2 box">
          <div className="content">
            <div className="row">
              <div className="image">
                <img
                  src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                  alt="Profile Image"
                />
              </div>
              <div className="post">
                <p>Post</p>
                <h5>28</h5>
              </div>
              <div className="followers">
                <p>Followers</p>
                <h5>678</h5>
              </div>
              <div className="following">
                <p>Following</p>
                <h5>120</h5>
              </div>
            </div>
            <div className="text">
              <p className="name">Neil David Adams</p>
              <p className="job_title">Content Creation</p>
              <p className="about">About</p>
              <p className="job_discription">
                Make money, go on adventures! If you are interested in seeking
                adventure and finding ways to make money to fund those
                adventures, this channel is for you! My ultimate dream is to
                become financially free, travel the world, and share different
                peoples' perspectives.
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};
