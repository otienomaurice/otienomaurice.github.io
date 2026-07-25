`timescale 1ns / 1ps
//-----------------------------------------------------------------------------
// Module Name   : lab10_top
// Project       : ECE 211 Digital Circuits 1
//-----------------------------------------------------------------------------
// Description   : Top-level module for Lab 10 - Health Monitor
//-----------------------------------------------------------------------------

module lab10_top(
    input  logic clock, switch,       // CLOCK 100 MHz
    input  logic reset, enter, start,
    output logic led_r, led_g, led_b,
    input  analog_pos_in,             // pulse sensor positive input
    input  analog_neg_in,             // pulse sensor negative input
    output logic [15:0] led,          // display digitized pulse sensor value
    output logic dot, pulse_led,      // display pulse as red LED
    output logic [7:0] a_n,
    output logic [6:0] segs_n
);
    logic enable, pulse_in, d_pulse;
    logic [3:0] d3p, d2p, d1p, d0p;
    logic [3:0] d3r, d2r, d1r, d0r;
    logic [3:0] d0, d1, d2, d3;
    logic [15:0] reaction_value, pulse_value;
    logic sclk, rs_en;                // divided clock 1 kHz
    logic rst, led_r1, led_g1, led_b1;

    pulse_monitor PULSE_MONITOR(
        .clk(sclk), .pulse_in(d_pulse), .d0p, .d1p, .d2p, .d3p, .rst
    );

    single_pulser PULSE(
        .d_pulse, .clk(sclk), .din(pulse_in)
    );

    reaction_timer REACTION_TIMER(
        .clk(sclk), .start, .enter, .rst,
        .d0r, .d1r, .d2r, .d3r,
        .led_r(led_r1), .led_b(led_b1), .led_g(led_g1), .rs_en
    );

    clkdiv CLKDIV(
        .clk(clock), .sclk(sclk), .reset(1'b0)
    );

    sevenseg_control SEVENSEG_CONTROL(
        .clk(sclk), .rst, .d0(d0), .d1(d1), .d2(d2), .d3(d3),
        .y_n(a_n), .segs_n, .dot, .en(enable)
    );

    pulse_sensor PULSE_SENSOR(
        .clk(clock), .rst, .analog_pos_in, .analog_neg_in, .led, .pulse(pulse_in)
    );

    assign rst = reset;
    assign reaction_value = {d3r, d2r, d1r, d0r};
    assign pulse_value    = {d3p, d2p, d1p, d0p};
    assign pulse_led      = pulse_in;

    always_comb begin
        if (switch) begin
            led_r  = led_r1;
            led_g  = led_g1;
            led_b  = led_b1;
            enable = rs_en;
            d0 = reaction_value[3:0];
            d1 = reaction_value[7:4];
            d2 = reaction_value[11:8];
            d3 = reaction_value[15:12];
        end else begin
            enable = 1'b1;
            led_r  = 1'b0;
            led_g  = 1'b0;
            led_b  = 1'b0;
            d0 = pulse_value[3:0];
            d1 = pulse_value[7:4];
            d2 = pulse_value[11:8];
            d3 = pulse_value[15:12];
        end
    end
endmodule
