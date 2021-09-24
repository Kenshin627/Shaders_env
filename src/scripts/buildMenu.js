import modules from "./modules/index";

const RENDERS = modules;
const MENU = [
  {
    title: "canvas",
    render: null,
  },
  {
    title: "svg",
    render: null,
  },
  {
    title: "GPU与渲染管线(1)",
    render: null,
  },
  {
    title: "GPU与渲染管线(2)",
    render: "renderPipeline",
  },
  {
    title: "用向量和坐标系描述点和线段",
    rneder: null,
  },
  {
    title: "向量乘法",
    rneder: null,
  },
  {
    title: "向量和参数方程描述曲线",
    rneder: null,
  },
  {
    title: "利用三角剖分和向量操作描述并处理多边形",
    render: null,
  },
  {
    title: "仿射变换对几何图形进行坐标变换",
    render: "affineTransform",
  },
  {
    title: "图形系统如何表示颜色",
    render: null,
  },
  {
    title: "生成重复图案、分形图案以及随机效果",
    render: null,
  },
];
export function menuBuilder() {
  const parent = document.querySelector(".menu");
  const ul = document.createElement("ul");
  let content = null;
  let li = null;
  parent.appendChild(ul);
  MENU.forEach((menu, index) => {
    li = document.createElement("li");
    li.setAttribute("class", "menu-item");
    li.setAttribute("id", `mene-item_${index}`);
    content = document.createTextNode(`${index + 1}. ${menu.title}`);
    li.appendChild(content);
    ul.appendChild(li);
    li.addEventListener("click", () => {
      if (menu.render && modules[menu.render]) {
        modules[menu.render]();
      }
    });
  });
}
