import { createIcon } from "../helpers/icons";
const developers = [
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaW4Gxv2OiPO1k3PY3KDUQ50z1nBI6p-BhWRoxkR42b8LQ9fXcIpZi6WbyRCPmEr68zH3GKqLFPe57U-CZMQWZTnM11yuxVpIX1Yuamr_6WQ2WYAS8tfNSdssmiM3nzmGWRKWE8WN6PMQIyEdkkpWYnO=w960-h1280-s-no?authuser=0',
    name: 'Artem <br> Kozlov',
    position: 'Team leader',
    github: 'https://github.com/m1lky4',
    linkedin: 'https://www.linkedin.com/in/artem-kozlov-80363526a/',
    instagram: 'https://www.instagram.com/akartemchik/',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaVCnC5L1luozgF5giYX1EEbnbmPM83JMzOmabIi9wlduYpl78HhG6z1Cy7XfQFqlh78W6_5MqX6-L20x5ww15YEBdbZJbsWTuyt_QiyGm3AqPyXMLe-fD14NY6uYpCdVWQY943srvCo_5oMKOOMUkdn=w712-h853-s-no?authuser=0',
    name: 'Serhii <br> Syniak',
    position: 'Scrum Master',
    github: 'https://github.com/Dezertirr',
    linkedin:
      'https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D1%81%D0%B8%D0%BD%D1%8F%D0%BA-228253264/',
    instagram: 'https://instagram.com/dezertir2283?igshid=MzNlNGNkZWQ4Mg==',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaU2219ScWOAaDmDeog50E7lQSFq0dCpJAyI5LjAJaLKV7YwhBK3kx6q-J0J7_VAEoJeP6KAtcyRWq79CclcM67U6tyQkcA4eKkhKtEoCR8sUJP96Lk7vHvOmdsIfYDe6fE5G3fhYIzDtIoUinXgnL02=w960-h1280-s-no?authuser=0',
    name: 'Mykhailo <br> Hudz',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaWrpKDSri0h5uGKKdI9pWw3UflYDL1BIk6a-92OaluZ6GlzjAdwmmXqSNHu6Uj4UdGZCoWwqPCRU0XHr2KKGaZj31v3ZQX9zjUFU7nlJQTbdt9LSMdAwquawQhyJ8SNF4oNpJukM4vUJ5OcynCUNWDv=w860-h1273-s-no?authuser=0',
    name: 'Oleksandr <br> Dubovyi',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaXucFxNpx3TvVdvU5rS9KHfcoFODlXyNaEuOndUPUF17UwU2RKhANXVrCrcexzCQCbEphutbmmNbj5fX7iixnYAbVShbU9DHDKxbFfFxpvgfoB3XGOVdzZQchip0dJahjILYof8ktx3dE_5d7FDS8AU=w730-h857-s-no?authuser=0',
    name: 'Vladyslav <br>Todosiichuk',
    position: 'Web Developer',
    github: 'https://github.com/VladyslavTodo',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaUAW9wohSGOUkLwXz6NbJOuz6o9U7_zuil-gKFwRkNT9QLRGStpVNJG9r2Zoh_LVKQbvlvfZMQrc1g2KgELMT6c7vhWDlze0nXybMgu-cdDc2OYN8gjct2GVzIwZ7ZBVk93vSrJmkNGEx_wmJrwpspO=w773-h1374-s-no?authuser=0',
    name: 'Oleksandra <br> Tyron',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaXtlv_-LwtLK-x86gZB-si1XAk3UO4RxCO3Pnp0SPuXCnTuWHr1FYpvH-dXHwk3iZuqI80OY0e-3dAY1kQbuYG_3amsOc84FN7o8tujtqhPQGh9m3FVLuZDIE38dq5wfLZKF1-bW6yuVLr0zSpfdh8Y=w1031-h1374-s-no?authuser=0',
    name: 'Kristina <br> Papura',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaUoUZTF95AIEyWjv4AWPlMmZxqeIP84qmlRA19Q3EmHt0J2gDjPgiX59NDuXV0pVlsELyagTepcAoMeFeeE4NU_qSAIMTThuyYidS3pfr48OYOjOZI7viT88-IU2QXr-fA-jf5uOjg761K-6oqjYQ0f=w635-h1374-s-no?authuser=0',
    name: 'Denys <br> Struk',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://www.instagram.com/denya_struk/',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaX6IETdXiwfKw6KWD7MjW3B8cnuByjH3ezMtGg35D5E0rjFeXjNhE0DbwDrEm1d7_MTpj_Cz0W8B1myu-FIVWZvTX5pEUUp6IHUlkSIO2i5WvatSZM5RKzznFWYsVuSjytBpoQh6LHqd_Tu0ULS7Sb-=w795-h1374-s-no?authuser=0',
    name: 'Maryna <br> Bonko',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AJFCJaXWy57998N9qVtRRUrRIDFh_xOd-Ihb-bQPoBCkNGAUEwR46igTXLEBHHMAMh3-fqijmlZJ_pdDJI9y0Xvsx4Hp3wMuRFOKD0POJXOSjYzEkxp5a3BcMKNg6qDFv383Ug27dnd-KQtxszgpFuPKv4kU=w1031-h1374-s-no?authuser=0',
    name: 'Maksym <br> Nazarenko',
    position: 'Web Developer',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
];

function createModalContentMarkup() {
  const markup = developers
    .map(
      developer => ` 
      <div class="swiper-slide developers-cards">
    <div class="card-footer" style="background-image: url(${developer.img})">
      <div class="content-footer">
        <h2 class="dev-name">${developer.name}</h2>
        <p class="dev-position">${developer.position}</p>
        <ul class="ftr-social-list">
          <li class="ftr-social-item">
            <a
              class="ftr-social-link"
              href="${developer.instagram}"
              target="_blank"
              rel="noreferrer noopener"
            >
             ${createIcon('instagram')}
              </a>
          </li>
          <li class="ftr-social-item">
            <a
              class="ftr-social-link"
              href="${developer.github}"
              target="_blank"
              rel="noreferrer noopener"
            >
            ${createIcon('github')}
            </a>
          </li>
          <li class="ftr-social-item">
            <a
              class="ftr-social-link"
              href="${developer.linkedin}"
              target="_blank"
              rel="noreferrer noopener"
            >
             ${createIcon('linkedin')}
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>`
    )
    .join('');
  return markup;
}
const modalContent = createModalContentMarkup();

const developersCards = document.querySelector('.swiper-wrapper');
developersCards.insertAdjacentHTML('afterbegin', modalContent);
