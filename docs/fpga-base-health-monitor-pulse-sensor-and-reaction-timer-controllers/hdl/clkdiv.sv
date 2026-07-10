`timescale 1ns / 1ps
//-----------------------------------------------------------------------------
// Title         : clkdiv - clock divider
//-----------------------------------------------------------------------------

module clkdiv(
    input  logic clk,
    input  logic reset,
    output logic sclk
);
    parameter DIVFREQ = 1000;          // desired frequency in Hz
    parameter DIVBITS = 26;            // enough bits to divide 100 MHz down to 1 Hz
    parameter CLKFREQ = 100_000_000;
    parameter DIVAMT  = (CLKFREQ / DIVFREQ) / 2;

    logic [DIVBITS-1:0] q;

    always_ff @(posedge clk) begin
        if (reset) begin
            q    <= '0;
            sclk <= 1'b0;
        end else if (q == DIVAMT - 1) begin
            q    <= '0;
            sclk <= ~sclk;
        end else begin
            q <= q + {{(DIVBITS-1){1'b0}}, 1'b1};
        end
    end
endmodule
