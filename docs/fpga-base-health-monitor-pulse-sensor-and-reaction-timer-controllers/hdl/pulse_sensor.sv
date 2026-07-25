`timescale 1ns / 1ps
//-----------------------------------------------------------------------------
// Module Name   : pulse_sensor
// Project       : ECE 211 Digital Circuits 1
//-----------------------------------------------------------------------------
// Description   : Pulse sensor using the XADC A/D converter.
//                 Uses a simple digital comparator with hysteresis and outputs
//                 the A/D result for display on LEDs.
//-----------------------------------------------------------------------------

module pulse_sensor(
    input  logic clk,             // fast clock 100 MHz
    input  logic rst,
    input  analog_pos_in,         // pulse sensor positive input
    input  analog_neg_in,         // pulse sensor negative input
    output logic [15:0] led,      // display digitized pulse sensor value
    output logic pulse            // display pulse as red LED
);
    logic [15:0] di_in, do_out;
    logic eoc_out;
    logic [4:0] channel_out;

    // The following signals are not connected to anything outside this module.
    logic busy_out, drdy_out, eos_out, ot_out, vccaux_alarm_out, vccint_alarm_out;
    logic user_temp_alarm_out, alarm_out;
    logic vp_in, vn_in;           // unused dedicated analog inputs

    assign vp_in = 1'b0;
    assign vn_in = 1'b0;
    assign led   = do_out;
    assign di_in = '0;

    logic [11:0] adc_data;
    assign adc_data = do_out[15:4];

    pulse_fsm U_PFSM(
        .clk, .rst(1'b0), .din(adc_data), .pulse
    );

    xadc_wiz_0 U_ADC(
        .daddr_in(channel_out),
        .dclk_in(clk),
        .den_in(eoc_out),
        .di_in,
        .dwe_in(1'b0),
        .reset_in(rst),
        .vauxp3(analog_pos_in),
        .vauxn3(analog_neg_in),
        .busy_out,
        .channel_out,
        .do_out,
        .drdy_out,
        .eoc_out,
        .eos_out,
        .ot_out,
        .vccaux_alarm_out,
        .vccint_alarm_out,
        .user_temp_alarm_out,
        .alarm_out,
        .vp_in,
        .vn_in
    );
endmodule
