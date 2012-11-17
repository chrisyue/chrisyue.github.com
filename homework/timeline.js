$(function() {
    // define opera
    var opera = {
        duration: 12000,
        scenes: {},
        expand: 10,
        center: {x: 0, y: 0},

        init: function() { // init the timeline (the scroll)
            var h = $(window).height();
            $("body").css({
                height: this.duration * this.expand + h
            });
            this.center.x = $(window).width() / 2;
            this.center.y = h / 2;
            this.initAt(this.getTime());
            return this;
        },

        getTime: function() {
            return Math.ceil($(window).scrollTop() / this.expand);
        },

        activate: function() {
            $(window).resize(function() {
                opera.init();
            });
            $(window).scroll(function() {
                opera.performAt(opera.getTime());
            });
            return this;
        },

        performAt: function(time) {
            console.log(time);
            for (var i in this.scenes) {
                if (this.scenes[i].start - 100 <= time && time <= this.scenes[i].end + 100) {
                    this.scenes[i].performAt(time);
                }
            }
            return this;
        },

        initAt: function(time) {
            for (var i in this.scenes) {
                this.scenes[i].performAt(time);
            }
            return this;
        },

        addScene: function(id, scene) {
            this.scenes[id] = scene;
            return this;
        }
    };
    // end of defination of opera

    // add scenes
    opera.addScene("declaration", {
        start: 0, end: 250,
        performAt: function(time) {
            var role = $("#declaration")
            role.css({
                left: opera.center.x - 300
            });
            if (time <= 100) {
                role.css({
                    top: (50 - time) / 2 + opera.center.y,
                    opacity: 0.01 * time
                });
            } else if (time <= 200) {
                role.css({
                    top: (50 - time) / 2 + opera.center.y,
                    opacity: 0.01 * (200 - time)
                });
            } else {
                role.css({
                    opacity: 0
                });
            }
        }
    }).addScene("title", {
        start: 250, end: 650,
        performAt: function(time) {
            var role = $("#title");
            var role2 = $("#author");
            role.css({
                top: opera.center.y - 250
            });
            role2.css({
                top: opera.center.y + 50
            });

            if (300 <= time && time <= 400) {
                role.css({
                    left: opera.center.x - 200,
                    opacity: 0.01 * (time - 300) 
                });
                role2.css({
                    left: opera.center.x - 100,
                    display: "block",
                    opacity: 0.01 * (time - 300) 
                });
            } else if (400 < time && time <= 500) {
                role.css({
                    left: opera.center.x - 200,
                    opacity: 100,
                }); 
                role2.css({
                    display: "block",
                    left: opera.center.x - 100,
                    opacity: 100,
                }); 
            } else if (500 < time && time <= 600) {
                role.css({
                    opacity: 0.01 * (600 - time),
                    left: opera.center.x - time + 300
                });
                role2.css({
                    display: "block",
                    opacity: 0.01 * (600 - time),
                    left: opera.center.x - 600 + time
                });
            } else {
                role.css({
                    opacity: 0
                });
                role2.css({
                    display: "none"
                });
            }
        }
    }).addScene("chapters", {
        start: 0, end: 0, // only for init purpose
        performAt: function(time) {
            $(".chapter").css({
                top: opera.center.y - 100,
                left: opera.center.x - 100
            });
        }
    }).addScene("chapter1", {
        start: 450, end: 850,
        performAt: function(time) {
            var role = $("#chapter1");

            if (500 <= time && time <= 600) {
                role.css('opacity', (time - 500) * 0.01);
            } else if (600 < time && time <= 700) {
                role.css('opacity', 1);
            } else if (700 < time && time <= 800) {
                role.css('opacity', (800 - time) * 0.01);
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure1", {
        start: 750, end: 1850,
        performAt: function(time) {
            var role = $("#figure1");

            if (800 <= time && time <= 1000) {
                role.css({
                    top: opera.center.y - 150,
                    left: opera.center.x - 150,
                    opacity: Math.min(1, (time - 800) * 0.01)
                });
            } else if (1000 < time && time <= 1200) {
                role.css({
                    top: opera.center.y - 150,
                    left: opera.center.x + 850 - time,
                    opacity: 1
                });
            } else if (1200 < time && time <= 1300) {
                role.css({
                    top: opera.center.y - 150,
                    left: opera.center.x - 350,
                    opacity: 1
                });
            } else if (1300 < time && time < 1800) {
                role.css({
                    opacity: .002 * (1800 - time),
                    top: opera.center.y - 150 - (time - 1300) / 10,
                    left: opera.center.x - 350
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p1", {
        start: 1050, end: 1850,
        performAt: function(time) {
            var role = $("#p1");
            
            role.css({
                left: opera.center.x
            });
            if (1100 <= time && time <= 1200) {
                role.css({
                    opacity: (time - 1100) * 0.01,
                    top: opera.center.y - time + 1100
                });
            } else if (1200 < time && time <= 1400) {
                role.css({
                    opacity: 1,
                    top: opera.center.y - time / 4 + 200
                });
            } else if (1400 < time && time <= 1500) {
                role.css({
                    opacity: (1500 - time) * 0.01,
                    top: opera.center.y - time + 1250
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p2", {
        start: 1250, end: 1850,
        performAt: function(time) {
            var role = $("#p2");
            
            role.css({
                left: opera.center.x
            });
            if (1300 <= time && time <= 1400) {
                role.css({
                    opacity: (time - 1300) * 0.01,
                    top: opera.center.y - time + 1400
                });
            } else if (1400 < time && time <= 1500) {
                role.css({
                    opacity: 1,
                    top: opera.center.y - (time - 1400)
                });
            } else if (1500 < time && time <= 1700) {
                role.css({
                    opacity: 1,
                    top: opera.center.y - time / 4 + 275
                });
            } else if (1700 < time && time <= 1800) {
                role.css({
                    opacity: (1800 - time) * 0.01,
                    top: opera.center.y - time + 1550
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p3", {
        start: 1800, end: 2400,
        performAt: function(time) {
            var role = $("#p3");
            role.css({
                left: opera.center.x - 400
            });

            if (1800 <= time && time <= 1900) {
                role.css({
                    opacity: (time - 1800) * .01,
                    top: opera.center.y + (1800 - time)
                });
            } else if (1900 < time && time <= 2300) {
                role.css({
                    opacity: 1,
                    top: opera.center.y - 100 - (time - 1900) / 5
                });
            } else if (2300 < time && time <= 2400) {
                role.css({
                    opacity: (2400 - time) * 0.01,
                    top: opera.center.y - 180 - time + 2300
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure2", {
        start: 2100, end: 4300,
        performAt: function(time) {
            var role = $("#figure2");

            role.css({
                top: opera.center.y - 100
            });

            if (2100 <= time && time <= 2200) {
                role.css({
                    left: opera.center.x + 250 - (time - 2100),
                    opacity: .01 * (time - 2100)
                });
            } else if (2200 < time && time  <= 3900) {
                role.css({
                    opacity: 1,
                    left: opera.center.x + 150
                });
            } else if (3900 < time && time <= 4000) {
                role.css({
                    opacity: (4000 - time) * .005 + .5,
                    left: opera.center.x + 150 - (time - 3900)
                });
            } else if (4000 < time && time <= 4300) {
                role.css({
                    opacity: .5 - (time - 4000) / 600,
                    left: opera.center.x + 50 - (time - 4000) / 4
                });
            } else if (time < this.start) {
                role.css('opacity', 0);
            } else if (4300 < time && time < 4400) {
                role.css('opacity', 0);
            }
        }
    }).addScene("p4-5", {
        start: 2400, end: 2600,
        performAt: function(time) {
            var role = $("#p4-5");

            role.css({
                left: opera.center.x - 400
            });

            if (2400 <= time && time <= 2500) {
                role.css({
                    top: opera.center.y - 130,
                    opacity: .01 * (time - 2400)
                });
            } else if (2500 < time && time <= 2600) {
                role.css({
                    top: opera.center.y - 130 - (time - 2500),
                    opacity: .01 * (2600 - time)
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p6", {
        start: 2600, end: 3000,
        performAt: function(time) {
            var role = $("#p6");

            role.css({
                top: opera.center.y - 150,
                left: opera.center.x - 400
            });
            if (2600 < time && time <= 2700) {
                role.css('opacity', .01 * (time - 2600));
            } else if (2700 < time && time <= 2900) {
                role.css('opacity', 1);
            } else if (2900 < time && time <= 3000) {
                role.css({
                    opacity: .01 * (3000 - time),
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure3", {
        start: 2800, end: 3700,
        performAt: function(time) {
            var role = $("#figure3");

            role.css({
                top: opera.center.y - 90
            });

            if (2800 < time && time <= 2900) {
                role.css({
                    left: opera.center.x + 300 - (time - 2800),
                    opacity: (time - 2800) * .01
                });
            } else if (2900 < time && time <= 3600) {
                role.css({
                    left: opera.center.x + 200,
                    opacity: 1
                });
            } else if (3600 < time && time <= 3700) {
                role.css({
                    left: opera.center.x + 200 + (time - 3600),
                    opacity: (3700 - time) * .01
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p7", {
        start: 3000, end: 3300,
        performAt: function(time) {
            var role = $("#p7");
            role.css({
                left: opera.center.x - 400
            });

            if (3000 < time && time <= 3100) {
                role.css({
                    opacity: .01 * (time - 3000),
                    top: opera.center.y  - (time - 3000) - 50
                });
            } else if (3100 < time && time <= 3200) {
                role.css({
                    opacity: 1,
                    top: opera.center.y - 150 - (time - 3100) / 5
                });
            } else if (3200 < time && time <= 3300) {
                role.css({
                    opacity: .01 * (3300 - time),
                    top: opera.center.y - 170 - (time - 3200)
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p8-9", {
        start: 3300, end: 3500,
        performAt: function(time) {
            var role = $("#p8-9");
            role.css({
                left: opera.center.x - 400,
                top: opera.center.y - 200
            });
            if (3300 < time && time <= 3400) {
                role.css('opacity', .01 * (time - 3300));
            } else if (3400 < time && time <= 3500) {
                role.css('opacity', .01 * (3500 - time));
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p10", {
        start: 3500, end: 3800,
        performAt: function(time) {
            var role = $("#p10");
            role.css({
                top: opera.center.y - 150
            });

            if (3500 < time && time <= 3600) {
                role.css({
                    left: opera.center.x - 500 + (time - 3500),
                    opacity: .01 * (time - 3500)
                });
            } else if (3600 < time && time <= 3700) {
                role.css({
                    left: opera.center.x - 400,
                    opacity: 1
                });
            } else if (3700 < time && time <= 3800) {
                role.css({
                    left: opera.center.x - 400 - (time - 3700),
                    opacity: (3800 - time) * .01
                })
            } else {
               role.css('opacity', 0);
            }
        }
    }).addScene("p11", {
        start: 3700, end: 3900,
        performAt: function(time) {
            var role = $("#p11");
            role.css({
                left: opera.center.x - 200
            });

            if (3700 < time && time <= 3800) {
                role.css({
                    opacity: (time - 3700) * .01,
                    top: opera.center.y - (time - 3700) / 2
                });
            } else if (3800 < time && time <= 3900) {
                role.css({
                    opacity: (3900 - time) * .01,
                    top: opera.center.y - (3900 - time) / 2
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p12", {
        start: 3900, end: 4200,
        performAt: function(time) {
            var role = $("#p12");
            role.css({
                top: opera.center.y - 50
            })
            if (3900 <= time && time <= 4000) {
                role.css({
                    left: opera.center.x - 400 + (time - 3900),
                    opacity: (time - 3900) * .01
                });
            } else if (4000 < time && time <= 4200) {
                role.css({
                    left: opera.center.x - 300 + (time - 4000) / 4,
                    opacity: (4200 - time) / 200
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("chapter2", {
        start: 4400, end: 4800, 
        performAt: function(time) {
            var role = $("#chapter2");

            if (4400 <= time && time <= 4500) {
                role.css({
                    opacity: (time - 4400) * 0.01,
                    color: "#000"
                });
            } else if (4500 < time && time <= 4700) {
                var color = Math.ceil(255 / 200 * (time - 4500));
                console.log('color:' + color);
                role.css({
                    opacity: 1,
                    color: "rgb(" + color + "," + color + "," + color + ")"
                });
            } else if (4700 < time && time <= 4800) {
                role.css({
                    opacity: (4800 - time) * 0.01,
                    color: "#fff"
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("atmosphere", {
        start: 4500, end: 12100,
        performAt: function(time) {
            var role = $("#atmosphere");
            role.css({
                left: 0,
                width: opera.center.x * 2, height: opera.center.y * 3,
            });

            if (4500 <= time && time <= 4600) {
                role.css({
                    opacity: (time - 4500) * .01,
                    top: 0
                });
            } else if (4600 < time && time <= this.end) {
                role.css({
                    opacity: 1,
                    top: -opera.center.y / (this.end - this.start) * (time - 4600)
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("moon", {
        start: 4800, end: 9500,
        performAt: function(time) {
            var role = $("#moon");
            if (this.start < time && time <= this.end) {
                var str = (time - this.start) / 50;
                var duration = time - this.start;
                role.css({
                    top: 200 - duration / 15,
                    left: -150 + duration / 3,
                    boxShadow: "0 0 " + str +  "px " + str / 3 + "px #ec0"
                });
            } else {
                role.css({
                    left: -150,
                });
            }
        }
    }).addScene("p13", {
        start: 4800, end: 5000,
        performAt: function(time) {
            var role = $("#p13");
            role.css({
                left: opera.center.x - 200
            });
            if (4800 < time && time <= 5000) {
                role.css({
                    top: opera.center.y - 50 - (time - this.start) / 2,
                    opacity: 1 - Math.abs(time - 4900) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p14", {
        start: 5000, end: 5200,
        performAt: function(time) {
            var role = $("#p14");
            role.css({
                left: opera.center.x - 200
            });
            if (5000 < time && time <= 5200) {
                role.css({
                    top: opera.center.y - 50 - (time - 5000) / 2,
                    opacity: 1 - Math.abs(time - 5100) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p15", {
        start: 5200, end: 5400,
        performAt: function(time) {
            var role = $("#p15");
            role.css({
                left: opera.center.x - 400
            });
            if (5200 < time && time <= 5400) {
                role.css({
                    top: opera.center.y - 50 - (time - 5200) / 2,
                    opacity: Math.min(100, 5400 - time) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p16", {
        start: 5300, end: 5500,
        performAt: function(time) {
            var role = $("#p16");
            role.css({
                left: opera.center.x + 100
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - 50 - (time - this.start) / 2,
                    opacity: Math.min(100, this.end - time) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p17", {
        start: 5500, end: 5700,
        performAt: function(time) {
            var role = $("#p17");
            role.css({
                left: opera.center.x - 200,
                top: opera.center.y - 50
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    opacity: Math.min(100, this.end - time) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p18", {
        start: 5700, end: 6000,
        performAt: function(time) {
            var role = $("#p18");
            role.css({
                top: opera.center.y - 100
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x - 200 + (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - 5850), 100) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure4", {
        start: 5800, end: 11500,
        performAt: function(time) {
            var role = $("#figure4");
            role.css({
                top: opera.center.y - 200,
                left: opera.center.x - 400
            });
            if (this.start < time && time <= 7300) {
                role.css({
                    opacity: Math.min(time - this.start, 100) * .005
                });
            } else if (7300 < time && time <= 7500) {
                role.css({
                    opacity: .5 - (time - 7300) * (.3 / 200)
                });
            } else if (7500 < time && time <= 11200) {
                role.css({
                    opacity: .2
                });
            } else if (11200 < time && time <= this.end) {
                role.css({
                    opacity: .2 * (this.end - time) / (this.end - 11200)
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p19", {
        start: 6000, end: 6300,
        performAt: function(time) {
            var role = $("#p19");
            role.css({
                left: opera.center.x 
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - 50 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - 6150, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p20", {
        start: 6300, end: 6600,
        performAt: function(time) {
            var role = $("#p20");
            role.css({
                left: opera.center.x 
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - 100 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p21", {
        start: 6500, end: 6800,
        performAt: function(time) {
            var role = $("#p21");
            role.css({
                top: opera.center.y + 50
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 100 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p22", {
        start: 6700, end: 7000,
        performAt: function(time) {
            var role = $("#p22");
            role.css({
                left: opera.center.x - 200
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - 200 + (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p23", {
        start: 6900, end: 7200,
        performAt: function(time) {
            var role = $("#p23");
            role.css({
                top: opera.center.y
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x - 300 + (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p24", {
        start: 7100, end: 7400,
        performAt: function(time) {
            var role = $("#p24");
            role.css({
                left: opera.center.x - 450
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - 100 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p25", {
        start: 7300, end: 7600,
        performAt: function(time) {
            var role = $("#p25");
            role.css({
                top: opera.center.y
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x - 300 + (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p26", {
        start: 7500, end: 7800,
        performAt: function(time) {
            var role = $("#p26");
            role.css({
                left: opera.center.x - 450
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - 100 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure2-2", {
        start: 7400, end: 11200,
        performAt: function(time) {
            var role = $("#figure2");
            if (4400 <= time && time < this.start) {
                role.css({
                    opacity: 0,
                    transform: "rotate(0deg)"
                });
            } else if (this.start < time && time <= 7670) {
                role.css({
                    left: opera.center.x - 100 + (time - this.start),
                    top: opera.center.y + 200 - (time - this.start),
                    opacity: (time - 7500) * .005,
                    transform: "rotate(" + (time - this.start) * 4 + "deg)"
                })
            } else if (7670 < time && time <= 10000) {
                role.css({
                    left: opera.center.x + 170,
                    top: opera.center.y - 70,
                    opacity: 1,
                    transform: "rotate(5deg)"
                });
            } else if (10000 < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 170,
                    top: opera.center.y - 70 - (time - 10000) / 2.5,
                    opacity: (this.end - time) / (this.end - 10000),
                    transform: "rotate(5deg)"
                });
            } else if (this.end < time) {
                role.css({
                    opacity: 0,
                    transform: "rotate(0deg)"
                });
            }
        }
    }).addScene("p27", {
        start: 7800, end: 8000,
        performAt: function(time) {
            var role = $("#p27");
            role.css({
                top: opera.center.y - 100
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x - 400 + (time - this.start) / 2,
                    opacity: 1 - (time - this.start) / (this.end - this.start)
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p28", {
        start: 8000, end: 8300,
        performAt: function(time) {
            var role = $("#p28");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure5", {
        start: 8000, end: 11200,
        performAt: function(time) {
            var role = $("#figure5");
            if (this.start < time && time <= 8270) {
                role.css({
                    left: opera.center.x - 90 + (time - this.start),
                    top: opera.center.y + 210 - (time - this.start),
                    opacity: (time - this.start) * .005,
                    transform: "rotate(" + (time - this.start) * 4 + "deg)"
                })
            } else if (8270 < time && time <= 10000) {
                role.css({
                    left: opera.center.x + 180,
                    top: opera.center.y - 60,
                    opacity: 1,
                    transform: "rotate(-5deg)"
                });
            } else if (10000 < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 180,
                    top: opera.center.y - 60 - (time - 10000) / 2,
                    opacity: (this.end - time) / (this.end - 10000),
                    transform: "rotate(-5deg)"
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p29-30", {
        start: 8300, end: 8600,
        performAt: function(time) {
            var role = $("#p29-30");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p31", {
        start: 8600, end: 8900,
        performAt: function(time) {
            var role = $("#p31");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure6", {
        start: 8600, end: 11200,
        performAt: function(time) {
            var role = $("#figure6");
            if (this.start < time && time <= 8870) {
                role.css({
                    left: opera.center.x - 80 + (time - this.start),
                    top: opera.center.y + 220 - (time - this.start),
                    opacity: (time - this.start) * .005,
                    transform: "rotate(" + (time - this.start) * 4 + "deg)"
                })
            } else if (8870 < time && time <= 10000) {
                role.css({
                    left: opera.center.x + 190,
                    top: opera.center.y - 50,
                    opacity: 1,
                    transform: "rotate(2deg)"
                });
            } else if (10000 < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 190,
                    top: opera.center.y - 50 - (time - 10000) / 3,
                    opacity: (this.end - time) / (this.end - 10000),
                    transform: "rotate(2deg)"
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p32-33", {
        start: 8800, end: 9100,
        performAt: function(time) {
            var role = $("#p32-33");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p34", {
        start: 9000, end: 9300,
        performAt: function(time) {
            var role = $("#p34");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure7", {
        start: 9000, end: 11200,
        performAt: function(time) {
            var role = $("#figure7");
            if (this.start < time && time <= 9270) {
                role.css({
                    left: opera.center.x - 60 + (time - this.start),
                    top: opera.center.y + 215 - (time - this.start),
                    opacity: (time - this.start) * .005,
                    transform: "rotate(" + (time - this.start) * 4 + "deg)"
                })
            } else if (9270 < time && time < 10000) {
                role.css({
                    left: opera.center.x + 210,
                    top: opera.center.y - 55,
                    opacity: 1,
                    transform: "rotate(-2deg)"
                });
            } else if (10000 < time && time < this.end) {
                role.css({
                    left: opera.center.x + 210,
                    top: opera.center.y - 55 - (time - 10000) / 4,
                    opacity: (this.end - time) / (this.end - 10000),
                    transform: "rotate(-2deg)"
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p35-36", {
        start: 9200, end: 9500,
        performAt: function(time) {
            var role = $("#p35-36");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p37", {
        start: 9500, end: 9800,
        performAt: function(time) {
            var role = $("#p37");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("figure8", {
        start: 9500, end: 11400,
        performAt: function(time) {
            var role = $("#figure8");
            if (this.start < time && time <= 9720) {
                role.css({
                    left: opera.center.x - 60 + (time - this.start),
                    top: opera.center.y + 215 - (time - this.start),
                    opacity: (time - this.start) * .005,
                    transform: "rotate(" + (time - this.start) * 4 + "deg)"
                })
            } else if (9670 < time && time <= 10000) {
                role.css({
                    left: opera.center.x + 190,
                    top: opera.center.y - 35,
                    opacity: 1,
                    transform: "rotate(7deg)"
                })
            } else if (10000 < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 190,
                    top: opera.center.y - 35 - (time - 10000) / 15,
                    opacity: (this.end - time) / (this.end - 10000),
                    transform: "rotate(7deg)"
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p38-39", {
        start: 9800, end: 10100,
        performAt: function(time) {
            var role = $("#p38-39");
            role.css({
                top: opera.center.y - 200,
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 200 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p40-41", {
        start: 10000, end: 10300,
        performAt: function(time) {
            var role = $("#p40-41");
            role.css({
                left: opera.center.x - 350
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    top: opera.center.y - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p42", {
        start: 10300, end: 10600,
        performAt: function(time) {
            var role = $("#p42");
            role.css({
                top: opera.center.y
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 200 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p43", {
        start: 10500, end: 10800,
        performAt: function(time) {
            var role = $("#p43");
            role.css({
                top: opera.center.y - 100
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x - 400 + (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p44", {
        start: 10700, end: 11000,
        performAt: function(time) {
            var role = $("#p44");
            role.css({
                top: opera.center.y
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x + 100 - (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p45-46", {
        start: 10900, end: 11200,
        performAt: function(time) {
            var role = $("#p45-46");
            role.css({
                top: opera.center.y - 100
            });
            if (this.start < time && time <= this.end) {
                role.css({
                    left: opera.center.x - 400 + (time - this.start) / 2,
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                })
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("p47", {
        start: 11200, end: 11500,
        performAt: function(time) {
            var role = $("#p47");
            role.css({
                top: opera.center.y - 100,
                left: opera.center.x - 200
            });

            if (this.start < time && time <= this.end) {
                role.css({
                    opacity: Math.min(150 - Math.abs(time - (this.start + this.end) / 2, 100)) * .01
                });
            } else {
                role.css('opacity', 0);
            }
        }
    }).addScene("cat", {
        start: 11800, end: 20000,
        run: false,
        performAt: function(time) {
            var role = $("#rainbow");
            if (this.start < time && time <= this.end) {
                if (!this.run) {
                    document.getElementById("audio").play();
                    role.animate({
                        left: '-20%'
                    }, 20000);
                } 
            }
        }
    }).init().activate();
});
