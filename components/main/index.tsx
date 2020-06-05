import React from "react";
import Block from "./block";

const Main = () => {
  return (
    <main>
      <div className={"list"}>
        <div className={"list__element"}>
          <div className={"list__text list__element_left list__gray"}>
            Свойства
          </div>
          <div className={"list__text list__element_right list__gray"}>
            Значение
          </div>
        </div>
        <Block title={info.title} elements={info.elements} />
        <Block title={competencies.title} elements={competencies.elements} />
        <Block title={education.title} elements={education.elements} />
        <Block title={requirements.title} elements={requirements.elements} />
      </div>
    </main>
  );
};

const info = {
  title: "Общая информация",
  elements: [
    {
      title: "Документ",
      value: "Профиль требований к должности",
    },
    {
      title: "Должность",
      value: "Инженер",
    },
    {
      title: "Функциональное направление",
      value: "Логистика",
    },
    {
      title: "Специализация",
      value:
        "Обслуживание и ремонт механического, энергетического и электрооборудоавания",
    },
  ],
};
const competencies = {
  title: "Корпоративные компетенции",
  elements: [
    {
      title: "Сотрудничество",
      value: "1",
    },
    {
      title: "Коммуникации и убеждения",
      value: "2",
    },
    {
      title: "Достижение результата",
      value: "3",
    },
    {
      title: "Системное мышление",
      value: "4",
    },
    {
      title: "Культура безопасности",
      value: "5",
    },
    {
      title: "Сотрудничество",
      value: "6",
    },
  ],
};
const education = {
  title: "Образование",
  elements: [
    {
      title: "Степень",
      value: "Высшее/Среднее высшее",
    },
    {
      title: "Специализация",
      value: "Инженерно-техническая",
    },
  ],
};
const requirements = {
  title: "Дополнительные требования",
  elements: [
    {
      title: "Инструменты",
      value: [
        {
          title: "",
          value: "Продвинутый уровень",
        },
        {
          title: "",
          value: "Продвинутый уровень",
        },
      ],
    },
    {
      title: "SAP ERP",
      value: "",
    },
    {
      title: "SAP HR",
      value: "",
    },
    {
      title: "Иностранные языки",
      value: [
        {
          title: "",
          value: "Продвинутый уровень",
        },
      ],
    },
    {
      title: "Английский",
      value: "",
    },
  ],
};

export default Main;
