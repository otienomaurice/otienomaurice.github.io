`timescale 1ns / 1ps

module rgb_pwm(
    input  logic clk, rst,
    input  logic [2:0] color_r, color_g, color_b,
    output logic rgb_r, rgb_g, rgb_b
);
    logic [3:0] rbgcount;

    always_ff @(posedge clk) begin
        if (rst) rbgcount <= '0;
        else     rbgcount <= rbgcount + 4'd1;
    end

    always_comb begin
        if (rbgcount < color_r) rgb_r = 1'b1; else rgb_r = 1'b0;
        if (rbgcount < color_g) rgb_g = 1'b1; else rgb_g = 1'b0;
        if (rbgcount < color_b) rgb_b = 1'b1; else rgb_b = 1'b0;
    end
endmodule
