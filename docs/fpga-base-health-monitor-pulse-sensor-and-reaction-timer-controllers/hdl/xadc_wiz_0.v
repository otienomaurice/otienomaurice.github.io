`timescale 1ns / 1ps
// Xilinx XADC wrapper extracted from the report.
// Requires Vivado/Xilinx 7-series libraries for the XADC primitive.

module xadc_wiz_0(
    daddr_in,
    dclk_in,
    den_in,
    di_in,
    dwe_in,
    reset_in,
    vauxp3,
    vauxn3,
    busy_out,
    channel_out,
    do_out,
    drdy_out,
    eoc_out,
    eos_out,
    ot_out,
    vccaux_alarm_out,
    vccint_alarm_out,
    user_temp_alarm_out,
    alarm_out,
    vp_in,
    vn_in
);
    input [6:0] daddr_in;
    input dclk_in;
    input den_in;
    input [15:0] di_in;
    input dwe_in;
    input reset_in;
    input vauxp3;
    input vauxn3;
    input vp_in;
    input vn_in;

    output busy_out;
    output [4:0] channel_out;
    output [15:0] do_out;
    output drdy_out;
    output eoc_out;
    output eos_out;
    output ot_out;
    output vccaux_alarm_out;
    output vccint_alarm_out;
    output user_temp_alarm_out;
    output alarm_out;

    wire GND_BIT;
    assign GND_BIT = 1'b0;

    wire [15:0] aux_channel_p;
    wire [15:0] aux_channel_n;
    wire [7:0] alm_int;

    assign alarm_out           = alm_int[7];
    assign vccaux_alarm_out    = alm_int[2];
    assign vccint_alarm_out    = alm_int[1];
    assign user_temp_alarm_out = alm_int[0];

    assign aux_channel_p[0]  = 1'b0;
    assign aux_channel_n[0]  = 1'b0;
    assign aux_channel_p[1]  = 1'b0;
    assign aux_channel_n[1]  = 1'b0;
    assign aux_channel_p[2]  = 1'b0;
    assign aux_channel_n[2]  = 1'b0;
    assign aux_channel_p[3]  = vauxp3;
    assign aux_channel_n[3]  = vauxn3;
    assign aux_channel_p[4]  = 1'b0;
    assign aux_channel_n[4]  = 1'b0;
    assign aux_channel_p[5]  = 1'b0;
    assign aux_channel_n[5]  = 1'b0;
    assign aux_channel_p[6]  = 1'b0;
    assign aux_channel_n[6]  = 1'b0;
    assign aux_channel_p[7]  = 1'b0;
    assign aux_channel_n[7]  = 1'b0;
    assign aux_channel_p[8]  = 1'b0;
    assign aux_channel_n[8]  = 1'b0;
    assign aux_channel_p[9]  = 1'b0;
    assign aux_channel_n[9]  = 1'b0;
    assign aux_channel_p[10] = 1'b0;
    assign aux_channel_n[10] = 1'b0;
    assign aux_channel_p[11] = 1'b0;
    assign aux_channel_n[11] = 1'b0;
    assign aux_channel_p[12] = 1'b0;
    assign aux_channel_n[12] = 1'b0;
    assign aux_channel_p[13] = 1'b0;
    assign aux_channel_n[13] = 1'b0;
    assign aux_channel_p[14] = 1'b0;
    assign aux_channel_n[14] = 1'b0;
    assign aux_channel_p[15] = 1'b0;
    assign aux_channel_n[15] = 1'b0;

    XADC #(
        .INIT_40(16'h0013),
        .INIT_41(16'h31A0),
        .INIT_42(16'h0400),
        .INIT_48(16'h0100),
        .INIT_49(16'h0000),
        .INIT_4A(16'h0000),
        .INIT_4B(16'h0000),
        .INIT_4C(16'h0000),
        .INIT_4D(16'h0000),
        .INIT_4E(16'h0000),
        .INIT_4F(16'h0000),
        .INIT_50(16'hB5ED),
        .INIT_51(16'h57E4),
        .INIT_52(16'hA147),
        .INIT_53(16'hCA33),
        .INIT_54(16'hA93A),
        .INIT_55(16'h52C6),
        .INIT_56(16'h9555),
        .INIT_57(16'hAE4E),
        .INIT_58(16'h5999),
        .INIT_5C(16'h5111),
        .SIM_DEVICE("7SERIES"),
        .SIM_MONITOR_FILE("design.txt")
    ) inst (
        .CONVST(GND_BIT),
        .CONVSTCLK(GND_BIT),
        .DADDR(daddr_in[6:0]),
        .DCLK(dclk_in),
        .DEN(den_in),
        .DI(di_in[15:0]),
        .DWE(dwe_in),
        .RESET(reset_in),
        .VAUXN(aux_channel_n[15:0]),
        .VAUXP(aux_channel_p[15:0]),
        .ALM(alm_int),
        .BUSY(busy_out),
        .CHANNEL(channel_out[4:0]),
        .DO(do_out[15:0]),
        .DRDY(drdy_out),
        .EOC(eoc_out),
        .EOS(eos_out),
        .JTAGBUSY(),
        .JTAGLOCKED(),
        .JTAGMODIFIED(),
        .OT(ot_out),
        .MUXADDR(),
        .VP(vp_in),
        .VN(vn_in)
    );
endmodule
