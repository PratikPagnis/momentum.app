class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer1__part--minutes"),
        seconds: root.querySelector(".timer1__part--seconds"),
        control: root.querySelector(".timer1__btn--control"),
        reset: root.querySelector(".timer1__btn--reset")
      };
  
      this.interval = null;
      this.remainingSeconds = 0;
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
  
      this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");
  
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });
    }
  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<i class="ri-play-line"></i>`;
        this.el.control.classList.add("timer1__btn--start");
        this.el.control.classList.remove("timer1__btn--stop");
      } else {
        this.el.control.innerHTML = `<i class="ri-pause-line"></i>`;
        this.el.control.classList.add("timer1__btn--stop");
        this.el.control.classList.remove("timer1__btn--start");
      }
    }
  
    start() {
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  
      this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
              <span class="timer1__part timer1__part--minutes">00</span>
              <span class="timer1__part">:</span>
              <span class="timer1__part timer1__part--seconds">00</span>
              <button type="button" class="timer1__btn timer1__btn--control timer1__btn--start">
                  <i class="ri-play-line"></i>
              </button>
              <button type="button" class="timer1__btn timer1__btn--reset">
                  <i class="ri-timer-line"></i>
              </button>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer1")
  );