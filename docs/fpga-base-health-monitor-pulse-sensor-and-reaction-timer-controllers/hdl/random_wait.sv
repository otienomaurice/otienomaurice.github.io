`timescale 1ns / 1ps

module random_wait(
    input  logic clk, rst, start_rwait,
    output logic wait_done
);
    logic [2:0] random_num, q, qinc;
    logic [12:0] w, W;
    logic commonstart;

    assign commonstart = start_rwait;

    delay_counter WAIT5(
        .clk(clk), .rst(rst || !commonstart || wait_done), .W(W)
    );

    count_3bit COUNT3(
        .clk(clk), .rst(rst), .q(random_num), .en(start_rwait)
    );

    incrementor INC(
        .q(q), .qinc(qinc)
    );

    randomnum_reg RANDOM(
        .rst(rst), .clk(clk), .d(random_num), .q(q), .en(commonstart)
    );

    multiplier MULTIPLY(
        .qinc(qinc), .w(w)
    );

    always_comb begin
        if (commonstart && (w == W)) wait_done = 1'b1;
        else                        wait_done = 1'b0;
    end
endmodule
