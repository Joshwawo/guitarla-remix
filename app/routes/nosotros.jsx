import image from "../../public/img/nosotros.jpg";
import styles from '~/styles/nosotros.css'

export function meta() {
  return { title: "GuitarLa - Nosotros" };
}

export function links(){

  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]

}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={image} alt="imagen sobre nosotros" />
        <div className="divo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
            magna sit amet odio tristique convallis. Duis nec dignissim felis.
            Donec in lorem id arcu finibus feugiat. Donec vehicula orci leo.
            Suspendisse potenti. Nullam venenatis turpis tincidunt, cursus felis
            quis, imperdiet ipsum. Praesent sagittis dictum leo vel sagittis.
            Duis accumsan posuere tellus vitae cursus. Mauris ut sapien vel nibh
            pulvinar blandit eu in ante. Proin vel porta dui. Nam malesuada
            sagittis tortor, sed finibus felis luctus non. Fusce sapien nunc,
            molestie pellentesque nisi eu, eleifend accumsan nunc. Mauris
            vestibulum porttitor lorem.
          </p>
          <p>
            Donec quis faucibus quam, in tincidunt augue. Phasellus id iaculis
            est. Donec lobortis consectetur porta. Nunc at elit ut urna pharetra
            varius ut vitae odio. Nulla tincidunt ac mauris eu ornare. Sed
            ultricies augue mauris, vitae pulvinar libero gravida ac. In rutrum
            metus est, non volutpat metus pretium in. Nunc at lorem ipsum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
