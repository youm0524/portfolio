// 타임라인 아이템이 뷰포트에 들어오면 active 클래스 추가
function revealTimelineItems() {
  const items = document.querySelectorAll(".timeline-item");
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealTimelineItems);
window.addEventListener("load", revealTimelineItems);
