import React from "react";

export const SecondCompo = () => {
  const arr = [
    {
      imageAddress:
        "https://e7.pngegg.com/pngimages/370/532/png-clipart-social-media-marketing-social-media-manager-management-the-kalifeh-media-group-social-media-text-content-marketing.png",
      content:
        "We manage social media accounts using cutting edge trends and strategies to get you real customers. ",
    },
    {
      imageAddress:
        "https://e7.pngegg.com/pngimages/317/602/png-clipart-pink-and-blue-background-with-text-overlay-social-media-optimization-social-media-marketing-digital-marketing-social-media-text-logo.png",
      content:
        "We create native advertisements that mirror the content your customers already watch.",
    },
    {
      imageAddress:
        "https://e7.pngegg.com/pngimages/44/263/png-clipart-social-media-marketing-social-media-marketing-business-social-media-marketing-computer-network-search-engine-optimization.png",
      content:
        "We entertain your customers first. Buying your product or service is just the logical next step.",
    },
  ];
  return (
    <div>
      <div className="wrapper-second">
        <h1 className="mt-3 fs-1 mb-5 " style={{ fontWeight: "800" }}>
          What we Do
        </h1>
        <div className="all-cards">
          <div class="container">
            <div class="row">
              {arr.map((data) => {
                return (
                  <div className="col-lg-6">
                    <div
                      class="card mb-3"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                        border: "none",
                        // boxShadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
                      }}
                    >
                      <div class="card-header">
                        <div
                          style={{
                            height: "58%",
                            width: "58%",
                            margin: "auto",
                          }}
                        >
                          <img
                            //   height="58%"
                            //   weight="58%"
                            //   height="60px"
                            //   width="60px"
                            //   style={{ margin: "auto" }}
                            src={data.imageAddress}
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="card-body">
                        {/* <h5 class="card-title ">Special title treatment</h5> */}
                        <p class="card-text fs-3">{data.content}</p>
                        {/* <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
