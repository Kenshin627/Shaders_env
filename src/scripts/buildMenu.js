const MENU = [
  "canvas",
  "svg",
  "GPU与渲染管线(1)",
  "GPU与渲染管线(2)",
  "用向量和坐标系描述点和线段",
  "向量乘法",
  "向量和参数方程描述曲线",
  "利用三角剖分和向量操作描述并处理多边形",
  "仿射变换对几何图形进行坐标变换",
  "图形系统如何表示颜色",
  "生成重复图案、分形图案以及随机效果",
];
export function menuBuilder() {
  const parent = document.querySelector(".menu");
  const ul = document.createElement("ul");
  let content = null;
  let li = null;
  parent.appendChild(ul);
  MENU.forEach((text, index) => {
    li = document.createElement("li");
    li.setAttribute("class", "menu-item");
    li.setAttribute("id", `mene-item_${index}`);
    content = document.createTextNode(`${index + 1}. ${text}`);
    li.appendChild(content);
    ul.appendChild(li);
  });
}
