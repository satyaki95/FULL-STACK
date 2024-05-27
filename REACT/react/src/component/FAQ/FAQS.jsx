import React, { useState } from 'react';
import { faqsData } from './DATA';
import FAQ from './FAQ';
import style from "./faqs.module.css";

const FAQS = () => {
    const [data, setdata] = useState(faqsData);
  return (
    <main className={style.container}>
        <section className={style.faqs}>
            <h1>FAQ</h1>
            {data.map(faq => <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}

export default FAQS;