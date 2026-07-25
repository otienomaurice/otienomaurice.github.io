`timescale 1ns / 1ps

module pulse_delay_counter(
    input  logic clk, rst,
    output logic delay_done
);
    logic [12:0] W;

    always_ff @(posedge clk) begin
        if (rst || delay_done) W <= '0;
        else                  W <= W + 13'd1;
    end

    assign delay_done = (W == 13'd5000);
endmodule
