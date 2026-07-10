`timescale 1ns / 1ps

module delay_counter5(
    input  logic rst, clk, start_wait5,
    output logic wait5_done
);
    logic [12:0] W;

    always_ff @(posedge clk) begin
        if (rst || wait5_done) W <= '0;
        else if (start_wait5)  W <= W + 13'd1;
    end

    assign wait5_done = (W == 13'd5000);
endmodule
