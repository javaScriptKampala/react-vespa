import { useState } from 'react';
import './App.css';
import 'serato-css/serato.css';
// import { LightSpeed } from 'react-reveal';
// import './magic.css';
import Animate from './vespa';

function App() {
  const [count, setCount] = useState(0);
  const [showElement, setShowElement] = useState(false);

  const handleToggle = () => {
    setCount((prevState) => prevState + 1);
    setShowElement(!showElement);
  };

  return (
    <>
      <div className="flex">Counter: {count}</div>
      {/* <LightSpeed left> */}
      <button
        onClick={handleToggle}
        className="flex color-red margin-top-4 padding-inline-4 padding-block-2 background-red-200--hoverable outline-none center-with-flex">
        Go Away
      </button>
      <p className="flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio
        vero totam architecto laborum! Inventore optio enim quidem, consequuntur
        vero commodi itaque eos quis delectus ex provident quasi magni illum
        neque atque dolore consequatur quisquam vitae libero tenetur! Nulla
        impedit at dolores omnis obcaecati ullam sequi voluptatem ratione cumque
        facilis cupiditate dolor quam totam, quaerat adipisci neque alias
        provident architecto! Voluptatem quibusdam nobis numquam, necessitatibus
        unde tempora aspernatur minima natus maiores repellendus tenetur maxime
        sequi? Dignissimos, temporibus perspiciatis sequi dolore omnis beatae
        libero est deleniti similique quia corporis fugiat eveniet a officiis
        quasi reiciendis excepturi dicta ex iusto alias consequatur provident,
        cumque tenetur! Minima distinctio vero expedita vel ducimus ullam quis,
        tempora impedit cupiditate quibusdam? Dolore, tempora praesentium. Ut
        placeat neque sit. Sint recusandae id commodi deserunt impedit
        architecto? Tempora porro autem deleniti excepturi quaerat libero ipsum
        quisquam omnis id, explicabo error ipsa et quo optio aliquid? Et
        pariatur blanditiis neque enim officiis voluptatum qui nostrum,
        exercitationem molestias tempora nam itaque corrupti at aperiam earum
        sequi consequuntur voluptate iure. Vero, error ratione quia sint ad
        veniam ea consectetur esse aliquam, voluptatum provident est. Similique
        placeat consectetur sed delectus est, molestiae eos minus odit eveniet
        aliquam voluptas iste itaque quidem voluptatibus asperiores
        necessitatibus laborum veritatis accusamus at, rerum odio dolore amet
        ducimus maxime. Suscipit sapiente alias cumque blanditiis repudiandae,
        unde accusantium ad. Commodi sit, atque explicabo delectus error
        repellat cum sint saepe enim fugit maxime nulla consequatur a quos
        reiciendis beatae, possimus quaerat natus aliquam hic. Perferendis
        possimus dolore labore ipsam, enim laudantium doloribus mollitia
        tempore, a odio ipsum similique harum in porro corrupti, totam
        temporibus! Adipisci quasi natus aliquam cumque, nam minus architecto,
        fuga rem animi, odio amet culpa consequatur exercitationem beatae quis?
        Modi impedit nam molestiae debitis reprehenderit quam consectetur,
        placeat odit nesciunt perspiciatis quisquam provident ad nihil aliquam
        et tempore corporis! Quasi minus libero porro saepe vero vitae corporis
        cupiditate fuga facere quod, exercitationem veritatis iste incidunt
        quidem voluptatibus ipsam beatae distinctio. Libero, incidunt animi sunt
        in dicta quam quae quibusdam sint alias consequatur expedita? Sed harum,
        culpa adipisci enim atque ipsam corporis recusandae dolore corrupti odit
        natus autem. Dignissimos nesciunt non, fuga atque inventore recusandae
        possimus temporibus dolores saepe explicabo vitae magnam blanditiis
        earum ea nihil accusantium necessitatibus mollitia illum aliquid nemo
        nisi! Ut molestiae deleniti eligendi libero fugiat ad doloremque
        distinctio ipsam expedita iure. Exercitationem explicabo obcaecati saepe
        tempore ipsa sint eius alias dolores eveniet deserunt, mollitia
        deleniti, debitis odit error natus. Maiores et vero magnam. Nostrum
        suscipit, architecto atque ea iure nihil fugiat consequuntur asperiores
        fuga iste excepturi praesentium aspernatur minus, eveniet totam.
        Quibusdam dicta labore velit alias laboriosam ipsa expedita blanditiis
        nemo similique sit dignissimos, earum beatae modi quis qui voluptas
        cumque tempora dolore, magnam obcaecati sint dolorum recusandae. Placeat
        neque laborum, nisi optio reiciendis consectetur beatae commodi corrupti
        minima tempore. Architecto magni magnam suscipit, dolorem iste ullam ad
        quibusdam laudantium! Pariatur recusandae officiis, eligendi dicta ab
        voluptatibus saepe earum error provident libero quis nostrum dolore,
        natus, beatae cupiditate rem. Tempore eum vel officia.
      </p>
      <Animate
        entranceAnimation="tinRightIn"
        exitAnimation="tinLeftOut"
        duration={1000}
        delay={100}
        onOut={() => console.log('Scrolled out of view')}>
        <h1>Hello, World!</h1>
      </Animate>

      {/* </LightSpeed> */}
    </>
  );
}

export default App;
