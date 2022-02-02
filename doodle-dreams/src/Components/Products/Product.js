import React, { Component } from 'react';
import images from './Data';
import * as S from './ProductStyles';
import '../../styles.css';

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1 className="prod-header">These are the products we use & reccomend</h1>
      <div className="card-container">
        <S.Card>
          <img className="card-image" src={images[0]} />
          <div class="card-text">
          <h4><b>Cesar Milan</b></h4>
          <p>How to Raise the Perfect Dog: Through Puppyhood and Beyond</p>
          <a href="https://www.amazon.com/dp/0307461300/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&amp;linkCode=w00&amp;linkId=640de74d8c59f5a335a5920b9bfca93d&amp;creativeASIN=0307461300" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[1]} />
          <div class="card-text">
          <h4><b>Petmate</b></h4>
          <p>Navigator Pet Kennel - 28" L X 20" W X 19.2"</p>
          <a href="https://www.amazon.com/dp/B00C89298M/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=fe7335258414902fecf6aeca4f272875&creativeASIN=B00C89298M" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[2]} />
          <div class="card-text">
          <h4><b>PetSafe</b></h4>
          <p>Easy Walk No Pull Dog Harness</p>
          <a href="https://www.amazon.com/dp/B0009ZD3QY/ref=as_sl_pc_qf_sp_asin_til?tag=bigdoodledrea-20&linkCode=w00&linkId=1d0d186484db244ba1123c9aa0ed90c1&creativeASIN=B0009ZD3QY" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[3]} />
          <div class="card-text">
          <h4><b>Luckyiren Upgraded Puppy Bells</b></h4>
          <p>Dog Doorbells for Door Knob/Potty Training/Go Outside-Dog Bells</p>
          <a href="https://www.amazon.com/dp/B07JNM8PYW/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=42b43b19bc71600317b3a4273841ca99&creativeASIN=B07JNM8PYW&th=1" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
    </div>
    <div className="card-container">
        <S.Card>
          <img className="card-image" src={images[4]} />
          <div class="card-text">
          <h4><b>Pet Oatmeal Anti-Itch Shampoo & Conditioner In One!</b></h4>
          <p>Relief For Allergies, Itchy, Dry, Irritated Skin!!</p>
          <a href="https://www.amazon.com/dp/B074NC67TB/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=0a22f0dcda2bd22448dd93feb560fa88&creativeASIN=B074NC67TB" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[5]} />
          <div class="card-text">
          <h4><b>Grizzly Omega</b></h4>
          <p>Health for Dogs & Cats, Wild Salmon/Pollock Oil Omega-3 Blend</p>
          <a href="https://www.amazon.com/dp/B074N9NLJY/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=218e7cc19cfa7daca9a04d95432d6360&creativeASIN=B074N9NLJY" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[6]} />
          <div class="card-text">
          <h4><b>Makondo Pets</b></h4>
          <p>Probiotics for Dogs & Puppies–Extra</p>
          <a href="https://www.amazon.com/dp/B075JSD2T9/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=2317f7db521254682086ed230f27a71c&creativeASIN=B075JSD2T9" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[7]} />
          <div class="card-text">
          <h4><b>Andis</b></h4>
          <p>ProClip 2-Speed Detachable Blade Clipper, Professional Animal Grooming</p>
          <a href="https://www.amazon.com/dp/B0018KVHBM/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=60ad10d9b8050bff53c2b2600943ae78&creativeASIN=B0018KVHBM" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
    </div>
    <div className="card-container">
        <S.Card>
          <img className="card-image" src={images[8]} />
          <div class="card-text">
          <h4><b>Andis</b></h4>
          <p>Pet Clipper Comb Set</p>
          <a href="https://www.amazon.com/dp/B000J1CNQO/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=dbcf77e720914880b191f1c81d158f82&creativeASIN=B000J1CNQO&th=1" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[9]} />
          <div class="card-text">
          <h4><b>Andis</b></h4>
          <p>Blade Care Plus Dip Jar, 16 oz</p>
          <a href="https://www.amazon.com/dp/B000MD57UI/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=37f52eca1e0eab1745b2346849f3b8d6&creativeASIN=B000MD57UI&th=1" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[10]} />
          <div class="card-text">
          <h4><b>Miracle Care</b></h4>
          <p>Ear Powder Step 1, 12 grams</p>
          <a href="https://www.amazon.com/dp/B0006JK2RQ/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=eca3eac66c4154e74a2b8a2f56627ccb&creativeASIN=B0006JK2RQ" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[11]} />
          <div class="card-text">
          <h4><b>ZYMOX OTIC</b></h4>
          <p>Hydrocortisone 1.0 Ear Solution Treatment Bacterial, Viral, and Yeast infections</p>
          <a href="https://www.amazon.com/dp/B01BKGX8HY/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=c937e2af4f06aad0d6422fc267274b1e&creativeASIN=B01BKGX8HY" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      
    </div>
    <div className="card-container">
      <S.Card>
          <img className="card-image" src={images[12]} />
          <div class="card-text">
          <h4><b>ZYMOX</b></h4>
          <p>Ear Cleanser With Bio-Active Enzymes, 4 oz.</p>
          <a href="https://www.amazon.com/dp/B0014HYCM0/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&linkCode=w00&linkId=d615d991bf0ae10ccc37f357f101150e&creativeASIN=B0014HYCM0" target="_blank">Buy Here!</a>
        </div>
      </S.Card>
      </div>
    </div>
    );
  }
}