<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(['name' => 'owner','created_at' => Carbon::now(),'updated_at' => Carbon::now()]);
        DB::table('roles')->insert(['name' => 'admin','created_at' => Carbon::now(),'updated_at' => Carbon::now()]);
        DB::table('roles')->insert(['name' => 'sale','created_at' => Carbon::now(),'updated_at' => Carbon::now()]);
        DB::table('roles')->insert(['name' => 'paker','created_at' => Carbon::now(),'updated_at' => Carbon::now()]);
        DB::table('roles')->insert(['name' => 'customer','created_at' => Carbon::now(),'updated_at' => Carbon::now()]);
    }
}
