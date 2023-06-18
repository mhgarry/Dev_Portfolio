import Jate from "../assets/images/projects//Screenshot 2023-05-25 204342.png";
import Flix from "../assets/images/projects/Flix_Card.png";
import Tasks from "../assets/images/projects/Tasks_Card.png";

export const ProjectsArray = [
	{
		id: 1,
		url: "https://stark-earth-85289.herokuapp.com/",
		title: "Tasks: Task Management Application",
		description: `Tasks is a comprehensive task management application that enables efficient organization
      and collaboration. As part of a collaborative team, I played a key role in the project, focusing on
      back-end development, modeling, and database management. I implemented robust authentication using Passport
      and ensured seamless user sign-in/registration functionality. Additionally, my responsibilities included project management,
      team coordination, and GitHub management. Notable achievements of the project include creating a streamlined workflow for creating,
      editing, and deleting tasks, tracking progress, and assigning tasks to specific users. The application, built using Handlebars.js, Express.js,
      Passport, Sequelize, and MySQL, has successfully empowered users to stay organized, boost productivity, and foster effective teamwork.`,
		img: Tasks,
	},
	{
		id: 2,
		url: "https://pwa-pocket-editor.herokuapp.com/",
		title: "PWA Pocket Editor",
		description: `PWA Pocket Editor is a progressive web application designed to provide users with a lightweight
      and versatile text editor. Developed and executed by myself, this project addresses the need for an efficient text editing
      tool that works seamlessly both online and offline. With PWA Pocket Editor, users can create, edit, and save text files,
      all while enjoying the convenience of offline functionality.

      Utilizing a combination of Webpack, service workers, IndexedDB, a manifest.json file, and Node.js, PWA Pocket Editor delivers
      an exceptional user experience. The application optimizes performance through Webpack, enabling fast and efficient loading.
      Service workers ensure that users can continue to access and edit their text files even when offline. IndexedDB handles reliable
      data storage, while the manifest.json file enables installation and cross-device compatibility. Throughout the development process,
      I overcame technical challenges and implemented innovative features to ensure a seamless and user-friendly experience.

      PWA Pocket Editor empowers users with a lightweight and easy-to-use text editing solution that can be utilized on any device, providing
      extreme convenience for professionals and casual users alike.`,
		img: Jate,
	},
	{
		id: 3,
		url: "https://flix-videos.herokuapp.com/",
		title: "Flix: Video Streaming Platform",
		description: `Flix is an exciting full-stack MERN application currently in development, showcasing the future of video streaming platforms.
      As a collaborative project with three talented developers from my boot camp class, Flix represents a remarkable fusion of creativity, innovation,
      and technical expertise.

      At its current stage, Flix offers users the ability to search the vast library of YouTube videos and create personalized accounts. However, the best is yet to come.
      In future releases, Flix will introduce captivating features that will transform the way users interact with video content.

      Upcoming updates will empower users to curate their own video collections by saving videos to their accounts and creating dynamic playlists. Additionally, a unique favorites
      section will enable users to easily access and enjoy their most-loved videos, providing a personalized and refreshing viewing experience.
      As a key contributor to the project, my focus lies in UI/UX development, styling, and front-end functionality. I've also played a crucial role in collaborating closely
      with the back-end developers, ensuring seamless integration of the various technologies powering Flix.

      By highlighting Flix in its current state, I aim to showcase its immense potential and my contributions to its unique design. The UX/UI development I have undertaken so far demonstrates
      my keen attention to detail, intuitive design choices, and commitment to creating a visually stunning and user-friendly experience. Flix harnesses a powerful stack of cutting-edge technologies,
      including React.js, Tailwind CSS, MongoDB, Express.js, Node.js, Apollo Server, GraphQL, and the Youtube Data API v3. This robust tech stack forms the foundation for Flix's seamless functionality,
      responsiveness, and efficient data management. With every new release, Flix is poised to revolutionize the way users consume video content, offering an immersive and personalized streaming experience.
      I eagerly anticipate the forthcoming updates and encourage you to stay tuned for the remarkable transformations ahead.

      Join me on this exciting journey as Flix continues to evolve and redefine the future of video streaming.`,
		img: Flix,
	},
];
