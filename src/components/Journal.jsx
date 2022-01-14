import { useState } from "react";
import {Route, Link, Routes} from "react-router-dom";

import { articles, articlesPrivate } from "../data/articles";

function Article({text}) {
    const {title, subtitle, resume, author, pdfLink} = text;
    return (
        <div className="my-10">
            <h1 className="">{title}</h1>
            <h2>{subtitle}</h2>
            <p>Pour {author}</p>
            <p className="my-10">{resume}</p>
            <a href={pdfLink} download={'pdf'} target="_blank" rel="noopener noreferrer" className="button border border-yellow text-yellow w-max my-10">Télecharger le PDF</a>
            <p className="transition-all transform hover:-translate-y-1 w-max my-10 text-yellow text-sm">
                <Link to="/journal" > &lt;&lt;  Revenir au jornal... </Link>
            </p>
        </div>
    )
};

function ArticlePreview({section, index, title, subtitle, author}) {
    return (
        <div className="my-10" >
            <span className="flex flex-wrap justify-between">
                <h1 className="py-1 text-2xl">{title}</h1>
                <p className="text-sm text-yellow flex items-center justify-center transform transition-all hover:-translate-y-1">
                    <Link to={`/journal/${section}/${index}`} className="text-yellow">Voir plus &gt;&gt;</Link>
                </p>
            </span>
            <h2 className="py-1 text-lg">{subtitle}</h2>
            <p className="text-sm my-2">{author}</p>
        </div>
    )
}

function TextsPreviewColumn({texts, section}){
    return (
        <div>
            {texts[section].map(({title, subtitle, author}, index) => 
                <ArticlePreview key={index} section={section} index={index} title={title} subtitle={subtitle} author={author}/>
            )}
        </div>
    )
};

function SelectionBar({sections, selectedSection, setSelectedSection}) {
    return (
        <div className="flex flex-row w-full my-8 justify-around items-center">
            {
                sections.map((sectionName, index) => 
                    selectedSection === sectionName 
                    ?
                        <div key={index} onClick={() => {}} className=" rounded-full py-1 px-2 mx-2 text-sm w-36 text-center bg-blue text-light cursor-pointer">
                            {sectionName}
                        </div>
                    :
                        <div key={index} onClick={() => setSelectedSection(sectionName)} className=" rounded-full py-1 px-2 mx-2 text-sm w-36 text-center border cursor-pointer border-blue text-blue">
                            {sectionName}
                        </div> 
                )
            }
        </div>
    )
};

export default function Journal({privateMode}){
    const selectedTexts = privateMode ? articlesPrivate : articles;
    const sections = Object.keys(selectedTexts);
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    return (
        <div className="my-10">
            <Routes >
                {sections.map((sectionName, index) => 
                    <Route key={index} path={`/${sectionName}/*`} element={
                        <Routes>
                            {selectedTexts[sectionName].map((text, innerIndex) =>
                                <Route key={innerIndex} path={`/${innerIndex}`} element={<Article text={text}/>} />
                            )}
                        </Routes>
                    } />
                )}

                <Route path="*" element={
                    <div>
                        {
                            privateMode ?
                            <>
                                <h1>Journal Le Porc</h1>
                                <h2>Tous les piers et plus rigolos moments.</h2>
                            </> :
                            <>
                                <h1>Journal Le VilleneuvoiX</h1>
                                <h2>La voix des X21 à Villeneuve</h2>
                            </>
                        }
                        <SelectionBar sections={sections} selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
                        <div className="w-full h-px bg-yellow"></div>
                        <TextsPreviewColumn texts={selectedTexts} section={selectedSection}/>
                    </div>
                } />
            </Routes>
            
        </div>
    )
};
