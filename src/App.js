import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg from "./assets/img/bg3.jpg"
import React from "react";

function App() {
    const layoutDesc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam, assumenda deleniti eum exercitationem, fuga harum itaque iusto natus nesciunt omnis perferendis saepe tenetur totam vitae! Ab beatae consequuntur iusto nisi pariatur quae similique tenetur vel veniam! Assumenda at culpa, doloribus eius esse ex facere illum inventore ipsam, nihil nobis perspiciatis quam saepe sapiente soluta temporibus vero voluptates, voluptatibus. Accusamus dolores hic illum itaque necessitatibus nisi perspiciatis quia quibusdam quisquam, sequi sit, soluta sunt tenetur! Alias animi assumenda corporis debitis doloremque ducimus eos minus molestias nam veritatis. Amet asperiores eius itaque libero nobis odit, veritatis vitae! Architecto, eveniet ipsam officiis ratione vitae voluptas? At culpa dolor dolores, eius facere, labore minus necessitatibus obcaecati ratione repellat sed sequi ullam! Amet assumenda culpa cum delectus est ex excepturi fugit hic magnam minus, modi non officia pariatur praesentium provident quibusdam quis quod quos reiciendis sapiente temporibus unde velit veritatis vero voluptate? Animi asperiores atque aut culpa cum deserunt dolores enim, id inventore iusto minima nemo non nostrum nulla placeat quae quod saepe sed similique tenetur. Autem deserunt dignissimos excepturi fugit laborum laudantium, libero maiores officiis perspiciatis possimus praesentium quo repudiandae sint. Alias architecto at commodi consequatur cum delectus dolorem esse illo impedit laudantium magni mollitia nemo, quasi repellendus suscipit tempore tenetur, vel, velit vero voluptate! Atque consectetur consequuntur dolores ipsam minus nesciunt nisi perspiciatis voluptate. Ab architecto deserunt dolores earum, explicabo ipsa minus neque nisi numquam odit perspiciatis sed, soluta veniam? Consectetur est eveniet explicabo illo ipsam laborum modi nulla quaerat quis quisquam sunt, ut vel? Aliquam asperiores at cum, dolor dolore dolorem earum eius enim est eum ex exercitationem expedita explicabo fugiat incidunt inventore ipsum iste itaque iusto, minima nihil porro possimus quibusdam quod, quos reiciendis temporibus voluptas? Cupiditate eaque, earum esse eum eveniet id modi mollitia nemo qui quis, quos similique.'
  return (
      <>
          <Header title={'Название в хедере'} descr={'Описание в хедере'} />
          <Layout title={'Описание секции'} descr={layoutDesc} urlBg={bg} colorBg />
          <Layout title={'Описание секции'} descr={layoutDesc} colorBg={'lightgrey'}/>
          <Layout title={'Описание секции'} descr={layoutDesc} urlBg={bg} colorBg/>
          <Footer />
      </>
  );
}

export default App;
