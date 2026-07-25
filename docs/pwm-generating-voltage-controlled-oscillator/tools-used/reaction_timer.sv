`timescale 1ns / 1ps

module reaction_timer(
    input  logic start, enter, clk, rst,
    output logic [3:0] d0r, d1r, d2r, d3r,
    output logic rs_en,
    output logic led_r, led_g, led_b
);
    logic time_late, time_en, time_clr;
    logic [2:0] color_r, color_g, color_b;
    logic start_rwait, rwait_done;
    logic start_wait5, wait5_done;

    allcounters TIMECOUNT(
        .d0(d0r), .d1(d1r), .d2(d2r), .d3(d3r),
        .rst(time_clr), .clk(clk), .enable(time_en), .time_late
    );

    rgb_pwm RGB(
        .color_r, .color_g, .color_b, .rst, .clk(clk),
        .rgb_r(led_r), .rgb_g(led_g), .rgb_b(led_b)
    );

    random_wait RANDOMW(
        .rst, .clk(clk), .wait_done(rwait_done), .start_rwait(start_rwait)
    );

    delay_counter5 DELAYC5(
        .rst, .clk(clk), .wait5_done, .start_wait5
    );

    reaction_FSM REACFSM(
        .start, .enter, .color_r, .color_g, .color_b,
        .time_clr, .time_en, .start_wait5, .start_rwait, .rs_en,
        .rwait_done, .wait5_done, .time_late, .rst, .clk(clk)
    );
endmodule
