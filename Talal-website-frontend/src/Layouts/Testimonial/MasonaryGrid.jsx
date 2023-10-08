import React, { useEffect, useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import "./MasonaryGrid.css";
import { toast } from 'react-toastify';
import { getTestimonialPage } from '../../services/TestimonialPageApi';

class MasonryGrid extends React.Component {
  componentDidMount() {
    // Initialize Masonry and ImagesLoaded after the component mounts
    this.initMasonry();
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isSmallScreen: window.innerWidth <= 768,
    };
  }

  componentDidMount() {
    toast.loading("Loading Home Services Div");
    getTestimonialPage()
      .then((res) => {
        toast.dismiss();
        console.log(res);
        this.setState({ data: res.data });
        toast.success("Successfully Fetched");
        this.initMasonry();
      })
      .catch((Err) => {
        toast.error("Try Again!");
      });
  }

  initMasonry = () => {
    const grid = this.refs.grid; // Reference to the grid container

    imagesLoaded(grid, function () {
      // Wait for images to load before initializing Masonry
      new Masonry(grid, {
        itemSelector: '.grid-item',
      });
    });
  }

  // <div className="image-container">
  //           <img src="https://s-media-cache-ak0.pinimg.com/736x/00/37/03/0037037f1590875493f413c1fdbd52b1--cool-beards-inspiring-photography.jpg" alt="Image 1" />
  //           <div className="overlay"></div>
  //           <div className="description">
  //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //           </div>    
  //           </div>

  //           <div className="grid-item">
  //           <div className="image-container">
  //           <img src="https://s-media-cache-ak0.pinimg.com/736x/cd/90/d9/cd90d9de63fa2c8e5c5e7117e27b5c18--gritty-portrait-photography-studio-photography.jpg" alt="Image 2" />
  //           <div className="overlay"></div>
  //           <div className="description">
  //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //           </div> 
  //           </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="https://1.bp.blogspot.com/-9QM7ciGXRkQ/V1hsB-wNLBI/AAAAAAAAMoA/eYbSHs00PTAjrI4QAmvYAIGCUe1AuRAnwCLcB/s1600/bryan_cranston_0095.jpg" alt="Image 3" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //         </div> 
  //          </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="http://webneel.com/sites/default/files/images/project/best-portrait-photography-regina-pagles%20(10).jpg" alt="Image 4" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //         </div> 
  //           </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="https://s-media-cache-ak0.pinimg.com/736x/dd/45/96/dd4596b601062eb491ea9bb8e3a78062--two-faces-baby-faces.jpg" alt="Image 5" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //         </div> 
  //           </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="http://www.marklobo.com.au/news/wp-content/uploads/2013/03/Melbourne_Portrait_Photographer_Mark_Lobo-Cowboy.jpg" alt="Image 6" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //          </div>
  //         </div> 
  //           </div>

          
  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="http://www.iefimerida.gr/sites/default/files/janbanning11.jpg" alt="Image 8" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //         </div> 
  //         </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="https://s-media-cache-ak0.pinimg.com/736x/66/bb/e7/66bbe7acc0d64da627afef440a29714b--portrait-photos-female-portrait.jpg" alt="Image 9" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //          </div>
  //         </div>
  //         </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="https://s-media-cache-ak0.pinimg.com/736x/25/34/b6/2534b6c18c659546463f13b2dc62d4ce--natural-portraits-female-portraits.jpg" alt="Image 10" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //         </div>
  //         </div>

  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="https://s-media-cache-ak0.pinimg.com/originals/8d/67/12/8d671230ced871df8428b571ed6ec192.jpg" alt="Image 11" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>
  //         </div>
  //         </div>
  //         <div className="grid-item">
  //         <div className="image-container">
  //         <img src="https://s-media-cache-ak0.pinimg.com/originals/8d/67/12/8d671230ced871df8428b571ed6ec192.jpg" alt="Image 11" />
  //         <div className="overlay"></div>
  //         <div className="description">
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.</p>
  //           </div>

  render() {

    return (
      <div style={{margin:"4%"}}>
      <div className='page-heading'><h1>Testimonials</h1></div>
        {/* Part 2: Create the grid */}
        <div className="grid" ref="grid">
          
        {this.state.data.map((item , index) =>{
          return <div className="grid-item">
            <div className="image-container">
              <img src={item.img}/>
              <div className="overlay"></div>
              <div className="description">
                <p>{this.state.isSmallScreen === true ? item._doc.data.slice(0, 350) : item._doc.data}</p>          
              </div>
            </div>    
          </div>
        })}      
      </div>
      </div>
    );
  }
}

export default MasonryGrid;
