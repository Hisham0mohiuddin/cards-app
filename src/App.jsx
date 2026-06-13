import { useState } from 'react'
import  TopBar  from "./components/TopBar";
import './App.css'

function App() {
  const [maxPts, updatemaxPts] = useState(0);
  const [crntPts,updatecrntPts]  = useState(0);


  return (<> 
    <TopBar maxp = {maxPts} crntp = {crntPts}></TopBar>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam ducimus, debitis aliquid incidunt quo dolorem sit? A, reprehenderit. In sint ipsa est reprehenderit ullam, eaque obcaecati magnam unde perspiciatis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, optio veniam a, debitis quae enim necessitatibus nulla sequi distinctio sed amet accusamus tempore quibusdam iure quisquam laudantium. Cupiditate, illo sunt!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero inventore qui cumque, dolores quam et, laudantium alias, eveniet repellat eius hic id voluptatem iste magnam asperiores blanditiis illum repudiandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti perspiciatis beatae architecto quisquam, voluptatem maxime sapiente? Quam corporis recusandae nemo harum dicta officia soluta dignissimos numquam reprehenderit. Repellat, aspernatur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus unde cumque iure consequuntur debitis in esse voluptates cum aut delectus temporibus autem doloremque, accusantium, qui ad obcaecati mollitia reprehenderit.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit possimus iste iusto consectetur tempore ratione minima alias repellendus nulla sequi, dignissimos tenetur mollitia veritatis? Dolores deleniti eligendi impedit culpa.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a, aliquam, natus illum sunt iure distinctio quia quae aspernatur eum consequuntur dolorum? Ipsum placeat nulla iure alias aperiam saepe dignissimos.
      loream
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, recusandae nam dolor temporibus est cumque quam optio earum minima dicta inventore dolorem eos aliquam vitae expedita doloremque iusto dolores quidem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo ea dolores ullam veritatis omnis doloremque impedit quos asperiores magni quia nobis expedita provident, eos consequatur perspiciatis numquam dolorem! Delectus?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium earum ratione voluptate soluta animi aliquid facere consequuntur! Id ex ut dolor qui placeat. Debitis inventore eius ducimus tempore reprehenderit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facilis aperiam, ab possimus quo officia iusto itaque unde minus eum, id in! Eaque molestias ab suscipit quod excepturi! Obcaecati!
      loream
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt neque, quae eveniet dignissimos voluptate itaque sed necessitatibus consequuntur inventore quibusdam doloribus nostrum tempore quidem omnis vero iusto nulla aperiam deleniti!
      lorea
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam aperiam nulla consequuntur error nostrum, inventore libero odio qui, quas cum optio rerum dolorum, aliquid deleniti. Velit iusto ut saepe?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum exercitationem iure nihil dolor quidem officiis quas debitis blanditiis error, magni rem consequuntur dolore assumenda libero in placeat voluptas voluptatibus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur et maiores, eligendi doloremque tempora debitis praesentium nesciunt cum beatae minima cumque? Ipsum eius enim totam rerum error quia harum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam earum, rerum eius quae a quisquam repellendus debitis voluptate exercitationem? Nihil, aperiam asperiores placeat iste non corporis quasi! Saepe, tenetur?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur qui esse tempore dolore recusandae laudantium iste quos sed nemo dolores facilis in natus, illo atque debitis cupiditate id magnam eligendi.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem doloribus provident fugiat fugit voluptatum obcaecati fuga, nostrum aliquam qui vitae excepturi assumenda asperiores dolores in dignissimos similique consectetur et?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ut autem illo odio nemo? Eum, quidem, quas similique numquam ab repudiandae nulla iure ut, dolorem quos ea beatae ipsa sapiente?
      
    </div>
  </>);
}

export default App
